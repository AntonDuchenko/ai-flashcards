import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AccessTokenGuard } from 'src/common/guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const { email, password } = body;
    const tokens = await this.authService.login(email, password);

    res.cookie('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return res.status(200).json({
      message: 'Login successful',
    });
  }

  @Post('register')
  async register(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const { email, password } = body;
    const tokens = await this.authService.register(email, password);

    res.cookie('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return res.status(201).json({
      message: 'Registration successful',
    });
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logout(@Res() res: Response, @Req() req: Request & { user: { userId: string } }) {
    await this.authService.logout(req.user.userId);

    res.clearCookie('access_token', { httpOnly: true, sameSite: 'strict' });
    res.clearCookie('refresh_token', { httpOnly: true, sameSite: 'strict' });

    return res.status(200).json({
      message: 'Logout successful',
    });
  }
}
