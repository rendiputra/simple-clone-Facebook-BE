const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");


dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, 
  () => {
    console.log("Berhasil terkoneksi dengan MongoDB");
  }
);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("cummon"));

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

const port = 8800;
app.listen(port, () =>{
  console.log(`Server running on port: ${port}`);
});