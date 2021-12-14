import { Injectable } from '@nestjs/common';
// import { AppConfigService } from '~/config';

@Injectable()
export default class GlobalConfigService {
  public globalConfig(auth: any) {
    const providers: string[] = [];

    if (auth.google !== null) providers.push('GOOGLE');

    if (auth.microsoft !== null) providers.push('MICROSOFT');

    return {
      providers,
    };
  }
}