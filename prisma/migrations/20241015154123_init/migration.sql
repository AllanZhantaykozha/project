-- CreateEnum
CREATE TYPE "Type" AS ENUM ('PROJECT', 'IC');

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER,
    "imageUrl" TEXT[],
    "type" "Type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);
