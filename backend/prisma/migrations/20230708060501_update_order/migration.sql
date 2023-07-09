/*
  Warnings:

  - Added the required column `foodId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderNo` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "foodId" INTEGER NOT NULL,
ADD COLUMN     "orderNo" INTEGER NOT NULL;
