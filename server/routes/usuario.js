const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario");
const usuario = require("../models/usuario");





app.get("/usuario", function (req, res) {
  
let desde = req.query.dese || 0;
desde = Number(desde);


let limite = req.query.limite || 5;
limite = Number(limite);

usuario.find({ })
       .skip(desde)  
       .limit(limite)
       .exec((err, usuarios)=>{
          if (err) {
            return res.status(400).json({
              ok: false,
              err
            })
          }

           res.json({
            ok: true,
            usuarios
          })

       })



});





app.post("/usuario", function (req, res) {
  const body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
      return usuarioDB;
    }

    // usuarioDB.password = null;

    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });
});

app.put("/usuario/:id", function (req, res) {
  const { id } = req.params;

  const { body } = req;
  // console.log(body);


  Usuario.findByIdAndUpdate(id, body, {new: true, runValidators: true}, (err, usuarioDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });
});

app.delete("/usuario", function (req, res) {
  res.send(" delete Usuario");
});

module.exports = app;
