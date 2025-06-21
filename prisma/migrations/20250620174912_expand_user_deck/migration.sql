/*
  Warnings:

  - Added the required column `type` to the `Deck` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DeckType" AS ENUM ('DAILY', 'REPEATING');

-- AlterTable
ALTER TABLE "Deck" ADD COLUMN     "type" "DeckType" NOT NULL;
