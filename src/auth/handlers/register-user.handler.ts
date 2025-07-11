import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterUserCommand } from '../commands';
import { ConflictException } from '@nestjs/common';
import { CreateUserCommand, GetUserByEmailCommand } from 'src/users/commands';
import { GenerateTokensCommand, HashPasswordCommand } from 'src/tokens/commands';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler implements ICommandHandler<RegisterUserCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  async execute(command: RegisterUserCommand) {
    const { email, password } = command;
    const existingUser = await this.commandBus.execute(new GetUserByEmailCommand(email));
    if (existingUser) throw new ConflictException('User already exists');

    const hashedPassword = await this.commandBus.execute(new HashPasswordCommand(password));
    const newUser = await this.commandBus.execute(new CreateUserCommand(email, hashedPassword));

    const tokens = await this.commandBus.execute(new GenerateTokensCommand(newUser.id));

    return tokens;
  }
}
