import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV != 'production') globalForPrisma.prisma;

export const getArticleLinks = async () => {
  try {
    return await prisma.externalPost.findMany({});
  } catch (error) {
    console.error('Error retrieving items from Prisma:', error);
    return [];
  }
};

export default prisma;
