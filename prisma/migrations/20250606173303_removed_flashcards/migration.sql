/*
  Warnings:

  - You are about to drop the `_DeckToFlashcard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `flashcards` to the `Deck` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_DeckToFlashcard" DROP CONSTRAINT "_DeckToFlashcard_A_fkey";

-- DropForeignKey
ALTER TABLE "_DeckToFlashcard" DROP CONSTRAINT "_DeckToFlashcard_B_fkey";

-- AlterTable
ALTER TABLE "Deck" ADD COLUMN     "flashcards" JSONB NOT NULL;

-- DropTable
DROP TABLE "_DeckToFlashcard";
