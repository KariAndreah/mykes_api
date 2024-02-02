import express from "express";
import bodyParser from "body-parser";
// import sunday_mic from "./routes/mics.js";
// import sundayMics from "./routes/mics.js";
import allFreeRouter from "./app/mics/routes/all-free-route.js";
import allRouter from "./app/mics/routes/all-route.js";
import boroughRouter from "./app/mics/routes/borough-route.js";
import boroughFreeRouter from "./app/mics/routes/borough-free-route.js";
import boroughDayRouter from "./app/mics/routes/borough-day-route.js";
import boroughDayTimeRouter from "./app/mics/routes/borough-day-time-route.js";
import boroughDayTimeFreeRouter from "./app/mics/routes/borough-day-time-free-route.js";
import boroughDayFreeRouter from "./app/mics/routes/borough-day-free-route.js";
import dayRouter from "./app/mics/routes/day-route.js";
import dayFreeRouter from "./app/mics/routes/day-free-route.js";
import individualRouter from "./app/mics/routes/individual-route.js";
import cors from "cors";
import cluster from "cluster";
import process from "process";
import { availableParallelism } from "os";

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  const PORT = process.env.PORT || 9999;
  // app.use(bodyParser.json());
  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    next();
  });

  // app.use('/mics', sundayMics)

  // app.use("/", sunday_mic);

  app.get("/", (req, res) => {
    res.send("Hello from Worker " + cluster.worker.id);
  });

  console.log("Worker %d running!", cluster.worker.id);

  app.use("/mics/all", allRouter);
  app.use("/mics/free", allFreeRouter);
  app.use("/mics/borough", boroughRouter);
  app.use("/mics/freeBorough", boroughFreeRouter);
  app.use("/mics/day", dayRouter);
  app.use("/mics/freeDay", dayFreeRouter);
  app.use("/mics/boroughDay", boroughDayRouter);
  app.use("/mics/freeBoroughDay", boroughDayFreeRouter);
  app.use("/mics/boroughDayTime", boroughDayTimeRouter);
  app.use("/mics/freeBoroughDayTime", boroughDayTimeFreeRouter);
  app.use("/mic", individualRouter);

  app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT} `)
  );
  console.log(`Worker ${process.pid} started`);
}
