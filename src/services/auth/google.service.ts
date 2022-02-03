import { Injectable } from '@nestjs/common';
import { AccountService } from '~/database/entities';
import Account from '~/database/entities/account/account.entity';
import JwtService from '~/modules/auth/services/jwt.service';

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

    const accessToken = this.jwtService.signAccount(account);

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
