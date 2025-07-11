import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { TokensService } from 'src/tokens/tokens.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  getCookieOptions() {
    return {
      httpOnly: true,
      secure: this.configService.getOrThrow<boolean>('COOKIE_SECURE'),
      sameSite: this.configService.getOrThrow<'lax' | 'none' | 'strict'>('COOKIE_SAMESITE'),
      maxAge: 1000 * 60 * 60 * 24 * 7,
    };
  }
}
