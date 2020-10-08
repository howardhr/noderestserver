const { Mongoose } = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')
const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let rolesValidos={
     values:[
          'ADMIN_ROLE',
          'USER_ROLE'
     ],
     message: '{VALUE} no esun rol valido'
     
};


let usuarioSchema = new Schema({

     nombre: {
          type: String,
          require: [true, 'el nombre es necesario']
     },

     email:{
         type: String,
         unique: true,
         require: [true, 'el email es requerido']


     },
     password:{
          type: String,
          require: [true, 'la contraseña es obligatoria']
     },

     img:{
          type: String,
          require: [false, 'Este campo es opcional']
     },

     role:{
          default:'USER_ROLE',
          type: String,
          require:[true, 'el rol es requerido'],
          enum: rolesValidos
     },

     estado:{
          type: Boolean,
          default: true
     },

     google:{
          type:Boolean,
          default:false
     }

}); 


usuarioSchema.methods.toJSON = function(){

     let user=this;
     let userObject = user.toObject();
     delete userObject.password;

     return userObject;
};

usuarioSchema.plugin(uniqueValidator, {message:
'{PATH} Debe ser unico'})

module.exports=mongoose.model('Usuario', usuarioSchema);