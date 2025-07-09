import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';
import { DailyDeckCompletion, EnglishLvl } from 'generated/prisma';

export class ProfileResponseDto {
  @IsString()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  email: string;

  @IsString()
  @Exclude()
  password: string;

  @IsString()
  @Exclude()
  refreshToken: string;

  @IsString()
  @Expose()
  isDailyComplete: boolean;

  @IsString()
  @Expose()
  isAnsweredInRepeating: false;

  @IsNumber()
  @Expose()
  daysStreak: 0;

  @IsArray()
  @Expose()
  dailyDeckCompletions: DailyDeckCompletion[];

  @IsEnum(EnglishLvl)
  @Expose()
  englishLvl: EnglishLvl;

  @IsDateString()
  @Expose()
  createdAt: Date;

  @IsDateString()
  @Expose()
  updatedAt: Date;

  @IsArray()
  @Expose()
  learnedWords: [];

  @IsArray()
  @Exclude()
  interests: [];
}
