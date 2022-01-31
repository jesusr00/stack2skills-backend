import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(AppConfigService);

  app.enableCors();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Stack2Skills')
    .setDescription('Stack2Skills API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || config.http.port, config.http.host);
}
bootstrap();
