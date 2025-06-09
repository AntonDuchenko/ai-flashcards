import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RefreshTokenMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.cookies?.access_token;
    const refreshToken = req.cookies?.refresh_token;

    try {
      this.jwtService.verify(accessToken, {
        secret: this.configService.getOrThrow<string>('JWT_SECRET'),
      });

      return next();
    } catch (err: any) {
      const isExpired = err.name === 'TokenExpiredError' || err instanceof TokenExpiredError;

      if (!isExpired || !refreshToken) {
        return next();
      }

      try {
        const payload = this.jwtService.verify(refreshToken, {
          secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
        });

        const user = await this.prisma.user.findUnique({
          where: { id: payload.sub },
        });

        if (!user || !user.refreshToken) {
          return next();
        }

        const isValid = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!isValid) {
          return next();
        }

        const newAccessToken = this.jwtService.sign(
          { sub: payload.sub },
          {
            secret: this.configService.getOrThrow<string>('JWT_SECRET'),
            expiresIn: this.configService.getOrThrow<string>('ACCESS_TOKEN_EXPIRES_IN'),
          },
        );

        res.cookie('access_token', newAccessToken, {
          httpOnly: true,
          sameSite: this.configService.getOrThrow<'lax' | 'none' | 'strict'>('COOKIE_SAMESITE'),
          secure: this.configService.getOrThrow<boolean>('COOKIE_SECURE'),
        });

        req.cookies.access_token = newAccessToken;

        return next();
      } catch {
        return next();
      }
    }
  }
}
