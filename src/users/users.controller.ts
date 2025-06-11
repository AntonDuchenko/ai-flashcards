import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AccessTokenGuard } from 'src/common/guards/jwt.guard';
import { EnglishLvl, Interest } from 'generated/prisma';

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

  @Put('/profile')
  updateUser(
    @Req() req: Request & { user: { sub: string } },
    @Body()
    body: {
      englishLvl: EnglishLvl;
      interests: Interest[];
    },
  ) {
    const interestIds = body.interests.map((interest) => ({
      id: interest.id,
    }));

    return this.usersService.updateUser(req.user.sub, {
      ...body,
      interests: {
        set: interestIds,
      },
    });
  }

  @Post('profile/complete')
  completeRegistration(
    @Req() req: Request & { user: { sub: string } },
    @Body()
    body: {
      englishLvl: EnglishLvl;
      interests: Interest[];
    },
  ) {
    return this.usersService.completeRegistration(req.user.sub, body);
  }

  @Post('/set-answers')
  setCorrectAnswer(
    @Req() req: Request & { user: { sub: string } },
    @Body() body: { wordId: string; correct: boolean; answerTime: number }[],
  ) {
    return this.usersService.setCorrectAnswer(req.user.sub, body);
  }
}
