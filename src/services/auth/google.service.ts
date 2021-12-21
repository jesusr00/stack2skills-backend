import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '~/database/entities';
import Account from '~/database/entities/account/account.entity';

@Injectable()
export default class GoogleService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async googleLogin(req) {
    if (!req.user)
      return {
        message: 'No user from google',
      };

    const { email, firstName, lastName, picture } = req.user;

    let account: Account;

    if (await this.accountService.existByEmail(email)) {
      account = await this.accountService.findOne(email);
    } else {
      account = await this.accountService.create({
        email,
        name: firstName,
        lastName,
        profilePhoto: picture,
      });
    }

    const payload = { email: account.email, sub: account.id };
    const accessToken = this.jwtService.sign(payload);

    return {
      message: 'User information from google',
      firstName,
      lastName,
      email,
      picture,
      accessToken,
    };
  }
}
