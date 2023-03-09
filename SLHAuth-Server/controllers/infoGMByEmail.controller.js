
const { response} = require('express');
const { default: mongoose } = require('mongoose');
const GmInfo = require('../models/GmInfo');




const infoGMByEmail = async (req,res = response)=>{

    const  email = req.params.email;

    const dbGM = await GmInfo.findOne( {Mail2: email}, 'idGM AKA EQUIPO Nickname Salarios SalarioLibre JUGADORES Mail2 Telegram alt_img DERECHOS');


/*     const dbGM = await GmInfo.find( {idGM: idGM}, 'idGM AKA EQUIPO Nickname Salarios SalarioLibre JUGADORES Mail2 Telegram alt_img DERECHOS');
 */
/* console.log(dbGM); */

    return res.json(dbGM)
};


    module.exports = {
        
        infoGMByEmail
        
    }