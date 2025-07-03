import { Injectable } from '@nestjs/common';
import { Flashcard } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

type Rating = 'again' | 'hard' | 'good' | 'easy';

interface SchedulerConfig {
  thresholds: { easy: number; good: number; hard: number }; // секунды
  minEase: number; // минимальное значение EF
  easyBonus: number; // множитель для "easy"
  hardPenalty: number; // уменьшение EF при "hard"
}

@Injectable()
export class FlashcardsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFlashcard(userId: string, data: { word: string; translation: string }) {
    return await this.prismaService.flashcard.create({
      data: {
        user: {
          connect: { id: userId },
        },
        ...data,
      },
    });
  }

  async updateFlashcard(cardId: string, data: Flashcard) {
    return await this.prismaService.flashcard.update({
      where: { id: cardId },
      data,
    });
  }

  async createManyFlashcards(
    data: {
      userId: string;
      deckId: string;
      word: string;
      translation: string;
    }[],
  ) {
    return this.prismaService.flashcard.createMany({ data });
  }

  async getFlashcardById(cardId: string) {
    return await this.prismaService.flashcard.findUnique({ where: { id: cardId } });
  }

  async getAllFlashcards() {
    return await this.prismaService.flashcard.findMany();
  }

  async getRandomFlashcards(count = 10) {
    const total = await this.prismaService.flashcard.count();

    if (total <= count) {
      return this.prismaService.flashcard.findMany();
    }

    const randomOffsets = new Set<number>();
    while (randomOffsets.size < count) {
      randomOffsets.add(Math.floor(Math.random() * total));
    }

    const promises = [...randomOffsets].map((offset) =>
      this.prismaService.flashcard.findFirst({ skip: offset }),
    );

    return Promise.all(promises);
  }

  classifyAnswer(
    responseTime: number,
    isCorrect: boolean,
    t: SchedulerConfig['thresholds'],
  ): Rating {
    if (!isCorrect || responseTime > t.hard) return 'again';
    if (responseTime > t.good) return 'hard';
    if (responseTime > t.easy) return 'good';
    return 'easy';
  }

  defaultConfig: SchedulerConfig = {
    thresholds: { easy: 5, good: 12, hard: 25 },
    minEase: 1.3,
    easyBonus: 1.3,
    hardPenalty: 0.05,
  };

  private nextLearningInterval(step: number): number {
    return [0, 1, 4][step] ?? 1;
  }

  async reviewCard(
    cardId: string,
    responseTime: number,
    isCorrect: boolean,
    cfg: Partial<SchedulerConfig> = {},
  ): Promise<Flashcard> {
    const { thresholds, minEase, easyBonus, hardPenalty } = { ...this.defaultConfig, ...cfg };
    const card = await this.getFlashcardById(cardId);

    if (!card) throw new Error("Card doesn't exist");

    const rating = this.classifyAnswer(responseTime, isCorrect, thresholds);

    let { easinessFactor, repetition } = card;
    let interval = 1;

    switch (rating) {
      case 'again': {
        // забыл / очень долго думал
        interval = this.nextLearningInterval(0);
        repetition = 0;
        break;
      }
      case 'hard': {
        // вспомнил с трудом
        interval = this.nextLearningInterval(1);
        easinessFactor = Math.max(minEase, easinessFactor - hardPenalty);
        repetition = 1;
        break;
      }
      case 'good': {
        // нормальная скорость
        interval = this.nextLearningInterval(1);
        repetition = 1;
        break;
      }
      case 'easy': {
        // ответил быстро и уверенно
        interval = this.nextLearningInterval(2);
        easinessFactor += 0.15;
        repetition = 2;
        break;
      }
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return {
      ...card,
      interval,
      easinessFactor: +easinessFactor.toFixed(2),
      repetition,
      dueDate: nextReview,
    };
  }

  async reviewRepeatingCard(
    cardId: string,
    responseTime: number,
    isCorrect: boolean,
    cfg: Partial<SchedulerConfig> = {},
  ): Promise<Flashcard> {
    const { thresholds, minEase, easyBonus, hardPenalty } = { ...this.defaultConfig, ...cfg };
    const card = await this.getFlashcardById(cardId);

    if (!card) throw new Error("Card doesn't exist");
    if (card.repetition < 2) throw new Error('Card is still in learning deck');

    const rating = this.classifyAnswer(responseTime, isCorrect, thresholds);

    let { easinessFactor, repetition, interval } = card;

    switch (rating) {
      case 'again':
        repetition = 0;
        interval = 0;
        easinessFactor = Math.max(minEase, easinessFactor - 0.2);
        break;

      case 'hard':
        interval = Math.max(1, Math.round(interval * 1.2));
        easinessFactor = Math.max(minEase, easinessFactor - hardPenalty);
        repetition += 1;
        break;

      case 'good':
        interval = Math.round(interval * easinessFactor);
        repetition += 1;
        break;

      case 'easy':
        interval = Math.round(interval * easinessFactor * easyBonus);
        easinessFactor += 0.15;
        repetition += 1;
        break;
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return {
      ...card,
      interval,
      easinessFactor: +easinessFactor.toFixed(2),
      repetition,
      dueDate: nextReview,
    };
  }
}
