-- CreateEnum
CREATE TYPE "PatientStatus" AS ENUM ('Inquiry', 'Onboarding', 'Active', 'Churned');

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "patientId" INTEGER;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "currentStatus" "PatientStatus",
ADD COLUMN     "forms" JSONB[],
ADD COLUMN     "statusHistory" "PatientStatus"[],
ADD COLUMN     "statusHistoryDates" TIMESTAMP(3)[];

-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "formTemplates" JSONB[];

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
