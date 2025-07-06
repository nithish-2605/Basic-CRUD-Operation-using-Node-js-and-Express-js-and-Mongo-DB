const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoute");
const connectDB = require("./DB/connectDB");

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/user", userRoute);

app.listen(PORT, () => {
  connectDB;
  console.log(`http://localhost:${PORT}`);
});
