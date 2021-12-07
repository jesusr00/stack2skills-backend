FROM node:16.13.1-alpine3.13 AS builder

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:16.13.1-alpine3.13 as starter

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/ ./node_modules/
COPY config.yaml ./

CMD ["node", "dist/main.js"]