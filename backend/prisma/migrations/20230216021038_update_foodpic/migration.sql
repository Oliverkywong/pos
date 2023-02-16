/*
  Warnings:

  - Added the required column `foodpic` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "foodpic" TEXT NOT NULL;
