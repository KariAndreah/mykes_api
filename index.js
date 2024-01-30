import express from "express";
import bodyParser from "body-parser";
// import sunday_mic from "./routes/mics.js";
// import sundayMics from "./routes/mics.js";
import allFreeRouter from "./app/mics/routes/all-free-route.js";
import allRouter from "./app/mics/routes/all-route.js";
import boroughRouter from "./app/mics/routes/borough-route.js";
import boroughFreeRouter from "./app/mics/routes/borough-free-route.js";
import boroughDayRouter from "./app/mics/routes/borough-day-route.js";
import boroughDayFreeRouter from "./app/mics/routes/borough-day-free-route.js";
import dayRouter from "./app/mics/routes/day-route.js";
import dayFreeRouter from "./app/mics/routes/day-free-route.js";
import individualRouter from "./app/mics/routes/individual-route.js";

const app = express();
const PORT = process.env.PORT || 9999;

// app.use(bodyParser.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use('/mics', sundayMics)

// app.use("/", sunday_mic);

app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

app.use("/all", allRouter);
app.use("/free", allFreeRouter);
app.use("/borough", boroughRouter);
app.use("/freeBorough", boroughFreeRouter);
app.use("/day", dayRouter);
app.use("/freeDay", dayFreeRouter);
app.use("/boroughDay", boroughDayRouter);
app.use("/freeBoroughDay", boroughDayFreeRouter);
app.use("/mic", individualRouter);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT} `)
);

console.log(process.env);
