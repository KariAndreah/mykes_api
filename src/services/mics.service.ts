import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getMics = async (params: any) => {
  let mic_cost: any;

  // console.log(params);

  if (params.cost === "true") {
    mic_cost = 1;
    // console.log("Is this working???");
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
      "manhattan",
      "queens",
      "staten-island",
      "bronx",
      "brooklyn",
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
    // console.log("else is working");
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
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
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
      orderBy: { id: "asc" },
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
      signup_instructions: true,
      host_mics: {
        include: {
          mic_host: true,
        },
      },
    },
  });

  return mics;
};

// Test to figure out many-to-many host_mics
const getMicHost = async (id?: number) => {
  const mics = await prisma.mics.findUnique({
    where: { id: id },
    include: {
      mic_address: true,
      mic_cost: true,
      mic_occurrence: true,
      signup_instructions: true,
      host_mics: {
        include: {
          mic_host: true,
        },
      },
    },
  });

  return mics;
};

const getMicTimes = async (params: any) => {
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
      "manhattan",
      "queens",
      "staten-island",
      "bronx",
      "brooklyn",
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
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
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

  let passingTime;
  const timesAllowed = [
    "00:00:00",
    "01:00:00",
    "02:00:00",
    "03:00:00",
    "04:00:00",
    "05:00:00",
    "06:00:00",
    "07:00:00",
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "13:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
    "17:00:00",
    "18:00:00",
    "19:00:00",
    "20:00:00",
    "21:00:00",
    "22:00:00",
    "23:00:00",
  ];
  if (params.start_time.includes("00:00")) {
    passingTime = `1970-01-01T${params.start_time}.000Z`;
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
    passingTime = "1970-01-01T00:00:00.000Z";
  }
  console.log("This is the passing Time", passingTime);

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
        start_time: { gte: passingTime },
        cost_id: mic_cost,
      },
      orderBy: { id: "asc" },
      skip: params.offset,
      take: params.limit,
    }),
    prisma.mics.count({
      where: {
        day: { in: passingDay },
        borough: { in: passingBorough },
        start_time: { gte: passingTime },
        cost_id: mic_cost,
      },
    }),
  ]);

  return { mics, count };
};
// console.log("Service is working ------", getMics);

export { getMics, getMic, getMicTimes, getMicHost };
