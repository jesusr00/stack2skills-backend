import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
  Request,
  Redirect,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AppConfigService } from '~/config';
import GoogleService from '~/services/auth/google.service';

@Controller('auth/google')
@ApiTags('Auth')
class GoogleController {
  constructor(
    private googleService: GoogleService,
    private appConfigService: AppConfigService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    //disable typescript-eslint/no-empty-function
  }

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request, @Res() res) {
    const result = await this.googleService.googleLogin(req);
    const params = new URLSearchParams(result).toString();
    return res.redirect(
      `${this.appConfigService.app.frontend}auth/sign-in?${params}`,
    );
  }
}

export default GoogleController;
