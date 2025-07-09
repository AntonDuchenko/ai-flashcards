-- CreateTable
CREATE TABLE "DailyDeckCompletion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyDeckCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyDeckCompletion_userId_date_key" ON "DailyDeckCompletion"("userId", "date");

-- AddForeignKey
ALTER TABLE "DailyDeckCompletion" ADD CONSTRAINT "DailyDeckCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
