/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "type_name_key" ON "type"("name");
