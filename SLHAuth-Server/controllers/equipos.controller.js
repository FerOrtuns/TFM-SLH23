

const { response} = require('express');
const GmInfo = require('../models/GmInfo');




const equipos = async (req,res = response)=>{


const dbequipos = await GmInfo.find( {}, 'idGM AKA EQUIPO Nickname Salarios SalarioLibre JUGADORES Mail2 Telegram alt_img DERECHOS');


/*     const dbGM = await GmInfo.find( {idGM: idGM}, 'idGM AKA EQUIPO Nickname Salarios SalarioLibre JUGADORES Mail2 Telegram alt_img DERECHOS');
 */
console.log(dbequipos);

    return res.json(dbequipos)
};


    module.exports = {
        
        equipos
        
    }