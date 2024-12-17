import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed the database
  await prisma.theme.create({
    data: {
      name: 'Animals',
      emojis: '😆',
    },
  });

  await prisma.theme.create({
    data: {
      name: 'Fruits',
      emojis: '🍏🍎🍐🍊🍋',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
