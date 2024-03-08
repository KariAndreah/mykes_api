// import express from "express";
// import bodyParser from "body-parser";
// // import sunday_mic from "./routes/mics.js";
// // import sundayMics from "./routes/mics.js";

// const app = express();
// const PORT = process.env.PORT || 9999;
// // app.use(bodyParser.json());
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(cors());

// app.use((_, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   next();
// });
// // app.use('/mics', sundayMics)
// // app.use("/", sunday_mic);
// app.get("/", (req, res) => {
//   res.send("Hello from Homepage");
// });

// app.use("/mics", api);

// app.listen(PORT, () =>
//   console.log(`Server running on port: http://localhost:${PORT} `)
// );
