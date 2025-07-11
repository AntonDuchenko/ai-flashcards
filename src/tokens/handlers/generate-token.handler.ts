import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TokensService } from '../tokens.service';
import { GenerateTokensCommand } from '../commands';

@CommandHandler(GenerateTokensCommand)
export class GenerateTokensHandler implements ICommandHandler<GenerateTokensCommand> {
  constructor(private readonly tokenService: TokensService) {}

  async execute(command: GenerateTokensCommand) {
    return this.tokenService.getTokens({ userId: command.userId });
  }
}
