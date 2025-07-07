import { IsArray, IsEnum, IsNotEmpty } from 'class-validator';
import { EnglishLvl, Interest } from 'generated/prisma';

export class ProfileCompleteDto {
  @IsNotEmpty({ message: 'EnglishLvl is required' })
  @IsEnum(EnglishLvl, { message: 'EnglishLvl incudes only "A1", "A2", "B1", "B2", "C1", "C2"' })
  englishLvl: EnglishLvl;

  @IsNotEmpty({ message: 'Interests is required' })
  @IsArray({ message: 'Interests must be an array' })
  interests: Interest[];
}
