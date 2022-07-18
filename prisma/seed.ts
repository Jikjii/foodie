import { PrismaClient } from "@prisma/client";
import { entrees } from "../data/entrees";

const prisma = new PrismaClient();

async function main() {
  await prisma.entree.createMany({
    data: entrees,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
