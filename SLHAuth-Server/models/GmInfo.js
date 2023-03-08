
const { Schema, model } = require("mongoose");


const GmInfoSchema = Schema ({



    idGM: {
        type: Number,
        required: false,
        unique: false
    },
    AKA: {
        type: String,
        required: false,
        unique: false
    },
    EQUIPO: {
        type: String,
        required: false,
        unique: false
    },
    Nickname: {
        type: String,
        required: false,
        unique: false
    },
    TelegramUsuario: {
        type: String,
        required: false,
        unique: false
    },
    Mail2: {
        type: String,
        required: false,
        unique: false
    },
    PasRN: {
        type: Number,
        required: false,
        unique: false
    },
    PasRN1: {
        type: Number,
        required: false,
        unique: false
    },
    TOTALR: {
        type: Number,
        required: false,
        unique: false
    },
    JUGADORES: {
        type: Number,
        required: false,
        unique: false
    },
    DERECHOS: {
        type: Number,
        required: false,
        unique: false
    },
    Salarios: {
        type: Number,
        required: false,
        unique: false
    },
    SalarioLibre: {
        type: Number,
        required: false,
        unique: false
    },
    Warnings: {
        type: Number,
        required: false,
        unique: false
    },
    Sanciones: {
        type: Number,
        required: false,
        unique: false
    },
    ENM: {
        type: Number,
        required: false,
        unique: false
    },
    BIE: {
        type: String,
        required: false,
        unique: false
    },
    SalarisN1: {
        type: Number,
        required: false,
        unique: false
    },
    Mínimos: {
        type: Number,
        required: false,
        unique: false
    },
    ENM1: {
        type: Number,
        required: false,
        unique: false
    },
    Telegram: {
        type: String,
        required: false,
        unique: false
    },
    Cortes2223: {
        type: String,
        required: false,
        unique: false
    },
    alt_img:  {
        type: String,
        required: false,
        unique: false
    }
});

module.exports = model('GmInfo', GmInfoSchema);









