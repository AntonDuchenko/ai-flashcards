import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString, IsUUID } from 'class-validator';

export class FlashcardDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Flashcard ID' })
  @IsUUID()
  @Expose()
  id: string;

  @ApiProperty({ example: 'word', description: 'Flashcard word' })
  @IsString()
  @Expose()
  word: string;

  @ApiProperty({ example: 'слово', description: 'Flashcard translation' })
  @IsString()
  @Expose()
  translation: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'User ID' })
  @IsUUID()
  @Exclude()
  userId: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Deck ID' })
  @IsUUID()
  @Exclude()
  deckId: string;

  @ApiProperty({ example: 1, description: 'Repetition counter' })
  @IsNumber()
  @Exclude()
  repetition: number;

  @ApiProperty({ example: 1.3, description: 'Easiness factor' })
  @IsNumber()
  @Exclude()
  easinessFactor: number;

  @ApiProperty({ example: 1, description: 'Repetition interval' })
  @IsNumber()
  @Exclude()
  interval: number;

  @ApiProperty({ example: '2025-07-11T09:17:13.173Z', description: 'Due date' })
  @IsDate()
  @Exclude()
  dueDate: Date;

  @ApiProperty({ example: '2025-07-11T09:17:13.173Z', description: 'Created at' })
  @IsDate()
  @Exclude()
  createdAt: Date;

  @ApiProperty({ example: '2025-07-11T09:17:13.173Z', description: 'Updated at' })
  @IsDate()
  @Exclude()
  updatedAt: Date;
}
