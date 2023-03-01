
const { Schema, model } = require("mongoose");


const playerSchema = Schema ({

    
    PLAYER: String,
    POS: String,
    TIPO: String, 
    TEAM: String,
    SALARIO: Number,
    AÑOS: Number,
    OPT: String

   

});

module.exports = model('player', playerSchema);









