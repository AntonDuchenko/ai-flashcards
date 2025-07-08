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
  ): Promise<{ word: string; translation: string }[]> {
    const forbiddenWordsArray = learnedWords.map((w) => w.toLowerCase());

    console.log(forbiddenWordsArray);

    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `
You are a STRICT generator of English-Russian flashcards.

OUTPUT RULES:
- Return ONLY a valid JSON array (no code blocks, no explanations).
- Exactly 10 objects in the array.
- Objects must be sorted alphabetically by the "word" field.
- Each object must have the following structure:
  {
    "word": "<lowercase-english-word>",
    "translation": "<single lowercase russian word>"
  }

CONTENT RULES:
- "word":
  - Only one single English word (letters only, no phrases or symbols).
  - MUST NOT be in the forbiddenWords list (case-insensitive).
- "translation":
  - One short, lowercase Russian word.
  - Must always be the same for the same English word (no synonyms or alternates).
- Do not invent or fabricate new or obscure vocabulary.
- All 10 words MUST be strictly unique.
- If any duplicates occur, retry and generate again.
`.trim(),
      },
      {
        role: 'user',
        content: `
Generate exactly 10 flashcards for CEFR level "${level}" on the topics: ${interests
          .map((i) => `"${i}"`)
          .join(', ')}.

forbiddenWords = [${forbiddenWordsArray.join(', ')}]

Return only valid JSON as described above.
`.trim(),
      },
    ];

    const completion = await this.client.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages,
      temperature: 0,
      top_p: 0.3,
    });

    if (!completion.choices.length || !completion.choices[0].message?.content) {
      console.log('OpenAI response is empty or invalid');
      throw new Error('OpenAI response is empty or invalid');
    }

    const rawContent = completion.choices[0].message.content;

    try {
      const cleaned = this.cleanJSON(rawContent);
      const parsed = JSON.parse(cleaned);

      const uniqueFlashcards = Array.from(
        new Map(
          parsed.map((card: { word: string; translation: string }) => [
            card.word.toLowerCase(),
            card,
          ]),
        ).values(),
      ) as { word: string; translation: string }[];

      if (uniqueFlashcards.length < 10) {
        throw new Error('Duplicate words detected in OpenAI response');
      }

      return uniqueFlashcards;
    } catch (err) {
      throw new Error('Failed to parse or validate JSON from OpenAI response');
    }
  }

  cleanJSON(raw: string) {
    return raw
      .replace(/^```(?:json)?/i, '')
      .replace(/```$/, '')
      .trim();
  }
}
