import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AccessTokenGuard } from 'src/common/guards/jwt.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const { email, password } = body;
    const tokens = await this.authService.login(email, password);

    const options = this.authService.getCookieOptions();

    res.cookie('access_token', tokens.accessToken, options);
    res.cookie('refresh_token', tokens.refreshToken, {
      ...options,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
      message: 'Login successful',
    });
  }

  @Post('register')
  async register(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const { email, password } = body;
    const tokens = await this.authService.register(email, password);
    const options = this.authService.getCookieOptions();

    res.cookie('access_token', tokens.accessToken, options);
    res.cookie('refresh_token', tokens.refreshToken, {
      ...options,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(201).json({
      message: 'Registration successful',
    });
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logout(@Res() res: Response, @Req() req: Request & { user: { sub: string } }) {
    await this.authService.logout(req.user.sub);
    const options = this.authService.getCookieOptions();

    res.clearCookie('access_token', options);
    res.clearCookie('refresh_token', options);

    return res.status(200).json({
      message: 'Logout successful',
    });
  }
}
