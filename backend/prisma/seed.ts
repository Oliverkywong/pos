import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.menu.deleteMany({})
  const types =  ['soup', 'food', 'salad', 'drink']
  for (let i = 0; i < 20; i++) {
    await prisma.menu.create({
      data: {
        foodname: i.toString(),
        description: i.toString(),
        price: Math.floor(Math.random()*50)+1,
        soldout: false,
        type: types[ Math.floor(Math.random()*3)]
      },
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });