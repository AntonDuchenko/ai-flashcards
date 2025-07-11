import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AccessTokenGuard } from 'src/common/guards/jwt.guard';
import { LoginDto } from './dto';
import { RequestWithUser } from 'src/common/types';
import { CommandBus } from '@nestjs/cqrs';
import { LoginUserCommand, LogoutUserCommand, RegisterUserCommand } from './commands';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly commandBus: CommandBus,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto, @Res() res: Response) {
    const { email, password } = body;
    const tokens = await this.commandBus.execute(new LoginUserCommand(email, password));

    const options = this.authService.getCookieOptions();

    res.cookie('access_token', tokens.accessToken, options);
    res.cookie('refresh_token', tokens.refreshToken, options);

    return res.status(200).json({
      message: 'Login successful',
    });
  }

  @Post('register')
  async register(@Body() body: LoginDto, @Res() res: Response) {
    const tokens = await this.commandBus.execute(
      new RegisterUserCommand(body.email, body.password),
    );

    const options = this.authService.getCookieOptions();

    res.cookie('access_token', tokens.accessToken, options);
    res.cookie('refresh_token', tokens.refreshToken, options);

    return res.status(201).json({ message: 'Registration successful' });
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logout(@Res() res: Response, @Req() req: RequestWithUser) {
    await this.commandBus.execute(new LogoutUserCommand(req.user.sub));
    const options = this.authService.getCookieOptions();

    res.clearCookie('access_token', options);
    res.clearCookie('refresh_token', options);

    return res.status(200).json({
      message: 'Logout successful',
    });
  }
}
