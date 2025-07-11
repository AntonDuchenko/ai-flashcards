import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateRefreshTokenCommand } from '../commands';
import { HashPasswordCommand } from 'src/tokens/commands';
import { UsersService } from '../users.service';

@CommandHandler(UpdateRefreshTokenCommand)
export class UpdateRefreshTokenHandler implements ICommandHandler<UpdateRefreshTokenCommand> {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly usersService: UsersService,
  ) {}

  async execute(command: UpdateRefreshTokenCommand) {
    const { refreshToken, userId } = command;

    if (refreshToken) {
      const hashedRefreshToken = await this.commandBus.execute(
        new HashPasswordCommand(refreshToken),
      );

      await this.usersService.updateUser(userId, {
        refreshToken: hashedRefreshToken,
      });
    } else {
      await this.usersService.updateUser(userId, {
        refreshToken: null,
      });
    }
  }
}
