import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from '~/config';
import GlobalConfigService from '~/services/global-config/globalConfig.service';

@Controller('config')
export default class GlobalConfigController {
  constructor(
    private globalConfigService: GlobalConfigService,
    private appConfigService: AppConfigService,
  ) {}

  @Get('global')
  getGlobalConfig() {
    return this.globalConfigService.globalConfig(this.appConfigService.auth);
  }
}
