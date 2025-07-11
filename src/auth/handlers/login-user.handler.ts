import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginUserCommand } from '../commands/login-user.command';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { CommandBus } from '@nestjs/cqrs';
import { GetUserByEmailCommand } from 'src/users/commands';
import { GenerateTokensCommand } from 'src/tokens/commands';

@CommandHandler(LoginUserCommand)
export class LoginUserHandler implements ICommandHandler<LoginUserCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  async execute(command: LoginUserCommand) {
    const { email, password } = command;
    const currentUser = await this.commandBus.execute(new GetUserByEmailCommand(email));

    if (!currentUser) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await compare(password, currentUser.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const tokens = await this.commandBus.execute(new GenerateTokensCommand(currentUser.id));

    return tokens;
  }
}
