import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { DeckService } from './deck.service';
import { AccessTokenGuard } from 'src/common/guards';
import { EnglishLvl } from 'generated/prisma';
import { RequestWithUser } from 'src/common/types';

@UseGuards(AccessTokenGuard)
@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Get()
  getUserDecks(@Req() req: RequestWithUser) {
    return this.deckService.getUserDecks(req.user.sub);
  }
}
