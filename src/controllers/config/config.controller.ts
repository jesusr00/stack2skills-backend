import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppConfigService } from '~/config';
import GlobalConfigService from '~/services/global-config/globalConfig.service';

@Controller('config')
@ApiTags('Config')
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
