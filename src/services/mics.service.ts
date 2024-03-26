import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getMics = async (params: any) => {
  let mic_cost: any;

  console.log(params);

  if (params.cost === "true") {
    mic_cost = 1;
    console.log("Is this working???");
  }

  // console.log(
  //   "This is what was passed",
  //   params.cost,
  //   "This is the Cost id",
  //   mic_cost
  // );
  let passingBorough;
  if (params.borough.includes("")) {
    passingBorough = [
      "Manhattan",
      "Queens",
      "Staten-Island",
      "Bronx",
      "Brooklyn",
    ];
    //   console.log("This is the borough", params.borough);
    //   if (params.borough.includes("All")) {
    //     passingBorough = [
    //       "Manhattan",
    //       "Queens",
    //       "Staten-Island",
    //       "Bronx",
    //       "Brooklyn",
    //     ];
    //   }
  } else {
    console.log("else is working");
    passingBorough = params.borough;
  }

  console.log(
    "This is the params",
    params.borough,
    "This is the passingBorough"
    // passingBorough
  );

  let passingDay;
  if (params.day.includes("")) {
    passingDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    //   console.log("This is the day", params.day);
    //   if (params.day.includes("All")) {
    //     passingDay = [
    //       "Sunday",
    //       "Monday",
    //       "Tuesday",
    //       "Wednesday",
    //       "Thursday",
    //       "Friday",
    //       "Saturday",
    //     ];
    //   }
  } else {
    console.log("else is working");
    passingDay = params.day;
  }

  console.log(
    "This is the params",
    params.day,
    "This is the passingDay"
    // passingDay
  );

  const [mics, count] = await prisma.$transaction([
    prisma.mics.findMany({
      include: {
        mic_address: true,
        mic_cost: true,
        mic_occurrence: true,
      },
      where: {
        day: { in: passingDay },
        borough: { in: passingBorough },
        // start_time: params.start_time,
        cost_id: mic_cost,
      },
      orderBy: { start_time: "asc" },
      skip: params.offset,
      take: params.limit,
    }),
    prisma.mics.count({
      where: {
        day: { in: passingDay },
        borough: { in: passingBorough },
        // start_time: params.start_time,
        cost_id: mic_cost,
      },
    }),
  ]);

  return { mics, count };
};

const getMic = async (id?: number) => {
  const mics = await prisma.mics.findUnique({
    where: { id: id },
    include: {
      mic_address: true,
      mic_cost: true,
      mic_occurrence: true,
    },
  });

  return mics;
};

// console.log("Service is working ------", getMics);

export { getMics, getMic };
