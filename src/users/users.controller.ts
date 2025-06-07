import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AccessTokenGuard } from 'src/common/guards/jwt.guard';

@UseGuards(AccessTokenGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/profile')
  getProfile(@Req() req: Request & { user: { sub: string } }) {
    return this.usersService.getUserById(req.user.sub);
  }

  @Post('/set-answers')
  setCorrectAnswer(
    @Req() req: Request & { user: { sub: string } },
    @Body() body: { englishWord: string; answersStatus: boolean }[],
  ) {
    return this.usersService.setCorrectAnswer(req.user.sub, body);
  }
}
