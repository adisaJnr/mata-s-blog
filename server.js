const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const { blogRouter } = require("./route/blogRouter");

const app = express();

const dotenv = require("dotenv");
dotenv.config()

const PORT = process.env.PORT || 5500;

DBURI = process.env.MONGO_URI;
mongoose
  .connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Connected to server at port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use(express.json());


app.use(cors());

app.use(express.urlencoded({ extended: false }));


app.use("/api", blogRouter);

