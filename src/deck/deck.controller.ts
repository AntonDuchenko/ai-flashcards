import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { DeckService } from './deck.service';
import { AccessTokenGuard } from 'src/common/guards';
import { EnglishLvl } from 'generated/prisma';

@UseGuards(AccessTokenGuard)
@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Get()
  getUserDecks(@Req() req: Request & { user: { sub: string } }) {
    return this.deckService.getUserDecks(req.user.sub);
  }
}
