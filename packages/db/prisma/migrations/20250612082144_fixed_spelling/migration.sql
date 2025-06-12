/*
  Warnings:

  - You are about to drop the column `pendingPayouuts` on the `validator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "validator" DROP COLUMN "pendingPayouuts",
ADD COLUMN     "pendingPayouts" INTEGER NOT NULL DEFAULT 0;
