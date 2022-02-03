import { Injectable } from '@nestjs/common';
import { JwtService as ProvidedJwtService } from '@nestjs/jwt';
@Injectable()
class JwtService {
  constructor(private jwtService: ProvidedJwtService) {}

  signAccount(account: any) {
    const payload = { email: account.email, sub: account.id };
    const token = this.jwtService.sign(payload);

    return token;
  }
}

export default JwtService;
