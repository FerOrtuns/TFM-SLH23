
const { Schema, model } = require("mongoose");


const GmInfoSchema = Schema ({

    

    idGM: Number,
    AKA: String,
    EQUIPO: String,
    Nickname: String,
    TelegramUsuario: String,
    Mail2: String,
    PasRN: Number,
    PasRN1: Number,
    TOTALR: Number,
    JUGADORES: Number,
    DERECHOS: Number,
    Salarios: Number,
    SalarioLibre: Number,
    Warnings: Number,
    Sanciones: Number,
    ENM: Number,
    BIE: String,
    SalarisN1: Number,
    Mínimos: Number,
    ENM1: Number,
    Telegram: String,
    Cortes2223: String,

});

module.exports = model('GmInfo', GmInfoSchema);









