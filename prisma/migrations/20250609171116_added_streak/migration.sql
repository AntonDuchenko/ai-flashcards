-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dailyComplete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "daysStreak" INTEGER NOT NULL DEFAULT 0;
