import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig, AuthConfig, HttpConfig } from './types/ConfigType';

@Injectable()
class AppConfigService {
  constructor(private configService: ConfigService) {}

  get app(): AppConfig {
    return this.configService.get('app');
  }

  get http(): HttpConfig {
    return this.configService.get('http');
  }

  get auth(): AuthConfig {
    return this.configService.get('auth');
  }
}

export default AppConfigService;
