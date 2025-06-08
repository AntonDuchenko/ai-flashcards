import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

type Flashcard = {
  word: string;
  translation: string;
  example: string;
};

@Injectable()
export class OpenAiService {
  private client: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.getOrThrow<string>('OPENAI_API_KEY'),
    });
  }

  async getRandomFlashcards(
    level: string,
    interests: string[],
    learnedWords: string[],
  ): Promise<Flashcard[]> {
    const excludedWords = learnedWords.map((w) => `"${w}"`).join(', ');
    const hasExcluded = learnedWords.length > 0;

    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `You are an assistant that generates English flashcards based on the user's CEFR level and topic. 
You must only return a valid JSON array of flashcards. Each flashcard must follow the required structure.
If a list of "learnedWords" is provided, do not include any of those words in the result.`,
      },
      {
        role: 'user',
        content: `Generate 10 English flashcards for CEFR level "${level}" on the interests "${interests.map((i) => `"${i}"`).join(', ')}". 

${hasExcluded ? `Exclude the following words: [${excludedWords}].` : ''}

Return ONLY a JSON array in the following format:
[
  {
    "word": "string",           // English word
    "translation": "string",    // Russian translation
    "example": "string"         // Simple English sentence with the word
  }
]

Do not include any explanations or text outside of the JSON.`,
      },
    ];

    const completion = await this.client.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages,
      temperature: 0.2,
    });

    if (!completion.choices.length || !completion.choices[0].message?.content) {
      console.log('OpenAI response is empty or invalid');
      throw new Error('OpenAI response is empty or invalid');
    }

    const rawContent = completion.choices[0].message.content;

    try {
      const cleaned = this.cleanJSON(rawContent);
      const result = JSON.parse(cleaned);

      return result;
    } catch (err) {
      throw new Error('Failed to parse JSON from OpenAI response');
    }
  }

  cleanJSON(raw: string) {
    return raw
      .replace(/^```(?:json)?/i, '')
      .replace(/```$/, '')
      .trim();
  }
}
