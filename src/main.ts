import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(AppConfigService);

  app.enableCors();

  await app.listen(process.env.PORT || config.http.port, config.http.host);
}
bootstrap();
