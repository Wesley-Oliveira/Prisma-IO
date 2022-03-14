/*
  Warnings:

  - You are about to drop the column `fk_id_modules` on the `courses_modules` table. All the data in the column will be lost.
  - Added the required column `fk_id_module` to the `courses_modules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "courses_modules" DROP CONSTRAINT "courses_modules_fk_id_modules_fkey";

-- AlterTable
ALTER TABLE "courses_modules" DROP COLUMN "fk_id_modules",
ADD COLUMN     "fk_id_module" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_fk_id_module_fkey" FOREIGN KEY ("fk_id_module") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
