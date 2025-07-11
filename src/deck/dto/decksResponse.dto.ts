import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsDate, IsEnum, IsString, IsUUID, ValidateNested } from 'class-validator';
import { DeckType, EnglishLvl } from 'generated/prisma';
import { FlashcardDto } from 'src/flashcards/dto';

export class DecksResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Deck ID' })
  @IsUUID()
  @Expose()
  id: string;

  @ApiProperty({ example: 'Deck title', description: 'Deck title' })
  @IsString()
  @Expose()
  title: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'User ID' })
  @IsUUID()
  @Exclude()
  userId: string;

  @ApiProperty({ example: 'DAILY', description: 'Deck type' })
  @IsEnum(DeckType)
  @Expose()
  type: DeckType;

  @ApiProperty({ example: 'A1', description: 'English level' })
  @IsEnum(EnglishLvl)
  @Expose()
  englishLvl: EnglishLvl;

  @ApiProperty({ example: '2025-07-11T09:17:13.173Z', description: 'Created at' })
  @IsDate()
  @Expose()
  createdAt: Date;

  @ApiProperty({ example: '2025-07-11T09:17:13.173Z', description: 'Updated at' })
  @IsDate()
  @Exclude()
  updatedAt: Date;

  @ApiProperty({
    example: [{ id: '123e4567-e89b-12d3-a456-426614174000', word: 'word', translation: 'слово' }],
    description: 'Flashcards',
  })
  @IsArray()
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => FlashcardDto)
  flashcards: FlashcardDto[];
}
