import { Controller, Get, Req, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import GoogleService from '~/services/auth/google.service';

@Controller('auth/google')
class GoogleController {
  constructor(private googleService: GoogleService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    //disable typescript-eslint/no-empty-function
  }

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request) {
    return this.googleService.googleLogin(req);
  }
}

export default GoogleController;
