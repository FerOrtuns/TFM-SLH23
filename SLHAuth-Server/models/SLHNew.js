
const { Schema, model } = require("mongoose");


const slhnewSchema = Schema ({

    
    PLAYER: String,
    AKA: String,
    EQUIPO: String, 
    SALARIO: Number,
    YEARS: Number,
    desde: Date,
    fichadoCortado: Boolean

   

});

module.exports = model('slhnew', slhnewSchema);