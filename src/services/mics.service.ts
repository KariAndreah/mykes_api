import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getMics = async () => {
  const queries = [];

  const mics = await prisma.mics.findMany();

  return mics;
};

console.log("Service is working ------", getMics);

export default getMics;
