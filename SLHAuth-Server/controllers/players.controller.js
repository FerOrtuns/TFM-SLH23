
const { response} = require('express');
const { default: mongoose } = require('mongoose');
const players = require('../models/player');




const getRoster = async (req,res = response)=>{

    const  AKA = req.params.AKA;

    /* const { xid } = req; */

    /* const xidGM  = mongoose.Types.ObjectId(xid); */

/*     console.log(AKA);
 */
    /* console.log(xid); */

    /* const dbGM = await GmInfo.findById( { _id: xid } );  */
    
    /* const dbGM = await GmInfo.findOne( {idGM: xid} );  */

    const myRoster = await players.find( {TEAM: AKA}, 'PLAYER POS TIPO TEAM SALARIO AÑOS OPT');

    console.log(myRoster);

    
    /* const dbGMAKA = await GmInfo.findOne({ AKA: "ATL"} );  */
    
 /*    console.log(dbGMAKA); */
/*     console.log('myRoster desde el back : ', myRoster);
       return JSON.parse(myRoster);

        
  */
    return res.json({

          myRoster 
         /* nombre: myRoster.PLAYER,
           posicion: myRoster.POS,
           tipo: myRoster.TIPO,
           equipoSLH: myRoster.TEAM,
           salario: myRoster.SALARIO,
           añosContrato: myRoster.AÑOS,
           opcion: myRoster.OPT */
    /*     ok:true,
        msg:'infoGM', */
        /* idGM: dbGM.idGM,  
        equipo: dbGM.AKA,
        email: dbGM.Mail2, 
        name: dbGM.nickname  */
        
         
        
        
  });
};


    module.exports = {
        
        getRoster
        
    }