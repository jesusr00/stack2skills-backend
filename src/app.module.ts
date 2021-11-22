import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleAuthModule} from './api/google/google.module';
import { GoogleStrategy } from './startegys/google.strategy';
import { AppConfig } from './config/config.service';

@Module({
  imports: [GoogleAuthModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, AppConfig],
})
export class AppModule {}
