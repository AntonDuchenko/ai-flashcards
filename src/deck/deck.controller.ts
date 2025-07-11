import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { DeckService } from './deck.service';
import { AccessTokenGuard } from 'src/common/guards';
import { RequestWithUser } from 'src/common/types';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DecksResponseDto } from './dto';
import { plainToInstance } from 'class-transformer';

@UseGuards(AccessTokenGuard)
@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @ApiOperation({ summary: 'Get user decks' })
  @ApiResponse({ status: 200, type: [DecksResponseDto] })
  @Get()
  getUserDecks(@Req() req: RequestWithUser) {
    const decks = this.deckService.getUserDecks(req.user.sub);

    return plainToInstance(DecksResponseDto, decks, {
      excludeExtraneousValues: true,
    });
  }
}
