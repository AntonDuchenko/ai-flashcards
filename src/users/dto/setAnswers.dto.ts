import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SetAnswersDto {
  @IsString()
  @IsNotEmpty()
  wordId: string;

  @IsBoolean()
  @IsNotEmpty()
  correct: boolean;

  @IsNumber()
  @IsNotEmpty()
  answerTime: number;
}
