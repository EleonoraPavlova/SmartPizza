import { hashSync } from 'bcrypt'

import { PrismaClient } from '../src/lib/prisma/generated'

const prisma = new PrismaClient()

async function createDatabase() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User User',
        email: 'user@gmail.com',
        password: hashSync('111111', 10),
        verified: true,
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@gmail.com',
        password: hashSync('111111', 10),
        verified: true,
        role: 'ADMIN',
      },
    ],
    skipDuplicates: true,
  })
  await prisma.category.createMany({
    data: [{ name: 'Pizzas' }, { name: 'Salads' }, { name: 'Breakfast' }, { name: 'Vegan' }, { name: 'Chicken' }],
    skipDuplicates: true,
  })
}

async function removeDatabase() {
  await prisma.user.deleteMany()
}

async function main() {
  try {
    await removeDatabase()
    await createDatabase()
  } catch (error) {
    console.log(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
