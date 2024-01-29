import express from "express";
import bodyParser from "body-parser";
// import sunday_mic from "./routes/mics.js";
import { router, router1 } from "./app/mics/routes.js";
// import sundayMics from "./routes/mics.js";

const app = express();
const PORT = process.env.PORT;

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

app.use("/mic", router);
app.use("/mics", router1);

console.log("THIS IS ROUTER", router);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT} `)
);
