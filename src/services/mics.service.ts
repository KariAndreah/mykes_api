import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getMics = async (params: any) => {
  let mic_cost: any;

  if (params.cost === "true") {
    mic_cost = 1;
    console.log("Is this working???");
  }

  console.log(
    "This is what was passed",
    params.cost,
    "This is the Cost id",
    mic_cost
  );

  const mics = await prisma.mics.findMany({
    include: {
      mic_address: true,
      mic_cost: true,
      mic_host: true,
      mic_occurrence: true,
    },
    where: {
      day: params.day,
      borough: params.borough,
      // start_time: params.start_time,
      cost_id: mic_cost,
    },
    orderBy: { start_time: "asc" },
  });

  return mics;
};

const getMic = async (id?: number) => {
  const mics = await prisma.mics.findUnique({
    where: { id: id },
    include: {
      mic_address: true,
      mic_cost: true,
      mic_host: true,
      mic_occurrence: true,
    },
  });

  return mics;
};

console.log("Service is working ------", getMics);

export { getMics, getMic };
