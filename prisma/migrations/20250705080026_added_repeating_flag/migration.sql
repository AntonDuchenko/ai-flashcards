/*
  Warnings:

  - You are about to drop the column `dailyComplete` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dailyComplete",
ADD COLUMN     "isAnsweredInRepeating" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDailyComplete" BOOLEAN NOT NULL DEFAULT false;
