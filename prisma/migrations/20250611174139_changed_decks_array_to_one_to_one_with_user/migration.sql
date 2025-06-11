/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Deck` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Deck_userId_key" ON "Deck"("userId");
