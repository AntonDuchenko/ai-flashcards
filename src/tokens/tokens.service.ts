import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TokensService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {}

  hashData(data: string): Promise<string> {
    return hash(data, 10);
  }

  generateToken(payload: any, options: any) {
    return this.jwtService.sign(payload, options);
  }

  async getTokens(payload: any) {
    const { userId, ...rest } = payload;

    const [accessToken, refreshToken] = await Promise.all([
      this.generateToken(
        {
          sub: userId,
          ...rest,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRES_IN'),
        },
      ),
      this.generateToken(
        {
          sub: userId,
          ...rest,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN'),
        },
      ),
    ]);

    await this.updateRefreshToken(payload.userId, refreshToken);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(userId: string, refreshToken: string | null): Promise<void> {
    if (refreshToken) {
      const hashedRefreshToken = await this.hashData(refreshToken);

      await this.usersService.updateUser(userId, {
        refreshToken: hashedRefreshToken,
      });
    } else {
      await this.usersService.updateUser(userId, {
        refreshToken: null,
      });
    }
  }
}
