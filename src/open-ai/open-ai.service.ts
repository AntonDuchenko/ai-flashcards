import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

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
  ): Promise<
    {
      word: string;
      translation: string;
    }[]
  > {
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
        content: `Generate exactly 10 unique English flashcards for CEFR level "${level}" on the interests "${interests.map((i) => `"${i}"`).join(', ')}".

Each flashcard must be a JSON object with the following structure:
{
  "word": "English word",             // must be a single English word
  "translation": "Russian translation" // must be a short Russian translation
}

Return only a valid JSON array of 10 such objects. Example:
[
  { "word": "reluctant", "translation": "неохотный" },
  ...
]

${hasExcluded ? `Do NOT include any of the following words (case-insensitive): [${excludedWords}]. These words must be strictly excluded.` : ''}

Rules you MUST follow:
- Only return a JSON array and nothing else (no explanations or code blocks).
- Do NOT include any of the excluded words.
- Do NOT repeat the same word in the array.
- All "word" values must be in English.
- All "translation" values must be in Russian.
- The array must contain exactly 10 valid flashcards.`,
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
