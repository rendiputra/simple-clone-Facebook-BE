const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");


dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, 
  () => {
    console.log("Berhasil terkoneksi dengan MongoDB");
  }
);

// middleware
app.use(express.json());
app.use(helmet());
// log
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const port = 8080;
app.listen(port, () =>{
  console.log(`Server running on port: ${port}`);
});