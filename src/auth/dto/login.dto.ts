import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 32, { message: 'Password must be between 8 and 32 characters' })
  password: string;
}
