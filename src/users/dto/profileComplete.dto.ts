import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty } from 'class-validator';
import { EnglishLvl, Interest } from 'generated/prisma';

export class ProfileCompleteDto {
  @ApiProperty({ example: 'A1', required: true, description: 'English level', enum: EnglishLvl })
  @IsNotEmpty({ message: 'EnglishLvl is required' })
  @IsEnum(EnglishLvl, { message: 'EnglishLvl incudes only "A1", "A2", "B1", "B2", "C1", "C2"' })
  englishLvl: EnglishLvl;

  @ApiProperty({
    example: [
      {
        name: 'sport',
        id: 'e5f8c95a-4e1b-4d98-b09b-5cbb1b3eec25',
      },
      {
        name: 'music',
        id: 'e5f8c95a-4e1b-4d92-b09b-5cbb1b3eec25',
      },
    ],
    required: true,
    description: 'User interests',
  })
  @IsNotEmpty({ message: 'Interests is required' })
  @IsArray({ message: 'Interests must be an array' })
  interests: Interest[];
}
