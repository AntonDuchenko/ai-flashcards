import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AccessTokenGuard } from 'src/common/guards/jwt.guard';
import { ProfileCompleteDto, ProfileResponseDto, SetAnswersDto } from './dto';
import { plainToInstance } from 'class-transformer';
import { RequestWithUser } from 'src/common/types';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@UseGuards(AccessTokenGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, type: ProfileResponseDto })
  @Get('/profile')
  getProfile(@Req() req: RequestWithUser) {
    const user = this.usersService.getUserById(req.user.sub);

    return plainToInstance(ProfileResponseDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOperation({ summary: 'Update user profile' })
  @ApiResponse({ status: 200, type: ProfileResponseDto })
  @Put('/profile')
  updateUser(
    @Req() req: RequestWithUser,
    @Body()
    body: ProfileCompleteDto,
  ) {
    const interestIds = body.interests?.map((interest) => ({
      id: interest.id,
    }));

    const updatedUser = this.usersService.updateUser(req.user.sub, {
      ...body,
      interests: {
        set: interestIds,
      },
    });

    return plainToInstance(ProfileResponseDto, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOperation({ summary: 'Complete user registration' })
  @ApiResponse({
    status: 200,
    schema: { type: 'object', properties: { message: { type: 'string' } } },
    example: { message: 'Registration completed' },
  })
  @Post('profile/complete')
  completeRegistration(
    @Req() req: RequestWithUser,
    @Body()
    body: ProfileCompleteDto,
  ) {
    return this.usersService.completeRegistration(req.user.sub, body);
  }

  @ApiOperation({ summary: 'Set answers' })
  @ApiResponse({ status: 200, type: ProfileResponseDto })
  @Post('/set-answers')
  setCorrectAnswer(@Req() req: RequestWithUser, @Body() body: SetAnswersDto[]) {
    const updatedUser = this.usersService.setCorrectAnswer(req.user.sub, body);

    return plainToInstance(ProfileResponseDto, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOperation({ summary: 'Set repeating deck answers' })
  @ApiResponse({ status: 200, type: ProfileResponseDto })
  @Post('/set-review-answers')
  setReviewAnswer(@Req() req: RequestWithUser, @Body() body: SetAnswersDto[]) {
    const updatedUser = this.usersService.setReviewAnswer(req.user.sub, body);

    return plainToInstance(ProfileResponseDto, updatedUser, {
      excludeExtraneousValues: true,
    });
  }

  // Method to create decks for all users manualy, use only in dev
  // TODO: add protect, that can use only in dev
  @Post('/create-decks')
  createDecksForEverybody() {
    return this.usersService.createDecksForEverybody();
  }
}
