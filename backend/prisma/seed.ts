import { PrismaClient } from '@prisma/client';
import { hashPassword } from "../util/hash"

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.foodCategory.deleteMany({})
  const name = ['soup', 'food', 'salad', 'drink']
  for (let i = 0; i < 4; i++) {
    await prisma.foodCategory.createMany({
      data: [
        { type: name[i] }
      ]
    })
  }

  await prisma.role.deleteMany({})
  const role = ['admin', 'user', 'staff', 'manager']
  for (let i = 0; i < 4; i++) {
    await prisma.role.createMany({
      data: [
        { role: role[i] }
      ]
    })
  }

  await prisma.food.deleteMany({})
  for (let i = 0; i < 20; i++) {
    await prisma.food.create({
      data: {
        foodname: "name_"+i.toString(),
        description: "description_"+i.toString(),
        foodpic: `download${Math.floor(Math.random() * 6)}.jpeg`,
        price: Math.floor(Math.random() * 50) + 1,
        soldout: false,
        categoryId: Math.floor(Math.random() * 4) + 1
      },
    });
  }

  const a = await hashPassword('admin')
  await prisma.user.deleteMany({})
  await prisma.user.create({
    data: {
      name: 'admin',
      password: a,
      roleId: 1
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