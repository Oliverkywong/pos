/*
  Warnings:

  - You are about to drop the column `orderprice` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `FoodOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FoodOrder" DROP CONSTRAINT "FoodOrder_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderprice";

-- DropTable
DROP TABLE "FoodOrder";

-- CreateTable
CREATE TABLE "OrderItem" (
    "foodId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("foodId","orderId")
);

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
