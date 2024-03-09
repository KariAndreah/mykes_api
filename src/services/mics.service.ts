import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getMics = async (day?: string) => {
  const queries = [];

  if (day) {
    queries.push({
      day: {
        equals: day,
      },
    });
  }

  const mics = await prisma.mics.findMany({
    where: { day: day },
    orderBy: { start_time: "asc" },
  });

  return mics;
};

const getMic = async (id?: number) => {
  const mics = await prisma.mics.findMany({
    where: { id: id },
  });

  return mics;
};

console.log("Service is working ------", getMics);

export { getMics, getMic };
