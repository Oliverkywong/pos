import { PrismaClient } from '@prisma/client';
import { hashPassword } from "../util/hash"

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.menu.deleteMany({})
  const types = ['soup', 'food', 'salad', 'drink']
  for (let i = 0; i < 20; i++) {
    await prisma.menu.create({
      data: {
        foodname: i.toString(),
        description: i.toString(),
        foodpic: `download${Math.floor(Math.random() * 6)}.jpeg`,
        price: Math.floor(Math.random() * 50) + 1,
        soldout: false,
        type: types[Math.floor(Math.random() * 4)]
      },
    });
  }

  const a = await hashPassword('admin')
  await prisma.admin.deleteMany({})
  await prisma.admin.create({
    data: {
      name: 'admin',
      password: a,
      role: 'boss'
    },
  });
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