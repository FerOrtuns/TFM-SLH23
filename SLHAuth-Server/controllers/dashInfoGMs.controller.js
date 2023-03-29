
const { response} = require('express');
const { default: mongoose } = require('mongoose');
const GmInfo = require('../models/GmInfo');




const infoGMs = async (req,res = response)=>{

    const  AKA = req.params.AKA;
/* 
    if(AKA === 'F.A.'){return}; */

    const dbGM = await GmInfo.findOne( {AKA: AKA}, 'idGM AKA EQUIPO Nickname Salarios SalarioLibre JUGADORES Mail2 Telegram alt_img DERECHOS');


/*     const dbGM = await GmInfo.find( {idGM: idGM}, 'idGM AKA EQUIPO Nickname Salarios SalarioLibre JUGADORES Mail2 Telegram alt_img DERECHOS');
 */
/* console.log(dbGM); */

    return res.json(dbGM)
};


    module.exports = {
        
        infoGMs
        
    }