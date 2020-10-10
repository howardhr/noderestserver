const mongoose = require("mongoose");

// import mongoose from "mongoose";

mongoose.connect(
  "process.env.LRU",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) throw err;
   console.log('Base de Datos En Linea');
  }
);
