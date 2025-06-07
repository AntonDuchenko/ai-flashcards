/*
  Warnings:

  - Added the required column `englishLvl` to the `Deck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Deck` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnglishLvl" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- AlterTable
ALTER TABLE "Deck" ADD COLUMN     "englishLvl" "EnglishLvl" NOT NULL,
ADD COLUMN     "topic" TEXT NOT NULL;
