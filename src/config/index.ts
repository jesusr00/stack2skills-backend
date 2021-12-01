import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import AppConfigService from './app.config';
import loadConfig from './app.config-loader';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [loadConfig],
      isGlobal: true,
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
class ConfigModule {}

export default ConfigModule;

export { AppConfigService, loadConfig };
