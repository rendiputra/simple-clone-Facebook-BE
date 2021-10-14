const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");


dotenv.config();


const port = 8800;
app.listen(port, () =>{
  console.log(`Server running on port: ${port}`);
});