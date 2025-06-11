/*
  Warnings:

  - You are about to drop the column `flashcards` on the `Deck` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `Flashcard` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Flashcard` table. All the data in the column will be lost.
  - You are about to drop the column `learnedWords` on the `User` table. All the data in the column will be lost.
  - Added the required column `translation` to the `Flashcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Flashcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deck" DROP COLUMN "flashcards";

-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "answer",
DROP COLUMN "question",
ADD COLUMN     "deckId" TEXT,
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "easinessFactor" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "repetition" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "translation" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "word" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "learnedWords";

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
