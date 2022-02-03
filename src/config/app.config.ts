import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  AppConfig,
  AuthConfig,
  DatabaseConfig,
  HttpConfig,
} from './types/ConfigType';

@Injectable()
class AppConfigService {
  constructor(private configService: ConfigService) {}

  /**
   * Indicates if the application is in development mode.
   * @returns A boolean value indicating whether the application is running in development mode.
   */
  isDevelopment(): boolean {
    return !this.app.env || this.app.env.toLowerCase() === 'development';
  }

  get app(): AppConfig {
    return this.configService.get('app');
  }

  get http(): HttpConfig {
    return this.configService.get('http');
  }

  get auth(): AuthConfig {
    return this.configService.get('auth');
  }

  get database(): DatabaseConfig {
    return {
      type: 'postgres',
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.username'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.database'),
    };
  }
}

export default AppConfigService;
