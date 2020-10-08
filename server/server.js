const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('./routes/usuario')
require("./config/config");
require('./cxMongo')
const morgan = require ('morgan');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(require('./routes/usuario'))

app.listen(process.env.PORT, () => {
  console.log("Escuchando en el Puerto", process.env.PORT);
});
