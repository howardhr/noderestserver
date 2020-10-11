const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuario");
const usuario = require("../models/usuario");

app.post("/login", (req, res) => {
  let body = req.body;

  Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
    if (err) {
      return res.json({
        ok: false,
        err,
      });
    }

    if (!usuarioDB) {
      return res.json({
        ok: false,
        err: {
          message: "(usuario )o contraseña incorecto",
        },
      });
    }

    if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
      return res.json({
        ok: false,
        err: {
          message: "(contraseña)o usuario incorecto",
        },
      });
    }

    let token  = jwt.sign({
         usuario:usuarioDB,

    },'DESARROLO-DE-APP', {expiresIn: process.env.CADUCE_TOKE});




   return res.status(200).json({
      ok: true,
      usuario: usuarioDB,
      token
    });
  });


});

module.exports = app;
