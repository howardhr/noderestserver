const mongoose = require("mongoose");

// import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://froy:1063@cluster0.uchxt.mongodb.net/cafe?retryWrites=true&w=majority",
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
