
const { response} = require('express');
const { default: mongoose } = require('mongoose');
const GmInfo = require('../models/GmInfo');




const infoGMs = async (req,res = response)=>{

    const  idGM = req.params.idGM;

    /* const { xid } = req; */

    /* const xidGM  = mongoose.Types.ObjectId(xid); */

    console.log(idGM);

    /* console.log(xid); */

    /* const dbGM = await GmInfo.findById( { _id: xid } );  */
    
    /* const dbGM = await GmInfo.findOne( {idGM: xid} );  */

    const dbGM = await GmInfo.find( {idGM: idGM}, 'idGM AKA EQUIPO Nickname');

    /* const dbGMAKA = await GmInfo.findOne({ AKA: "ATL"} );  */
    
 /*    console.log(dbGMAKA); */
    console.log('dbGm es' , dbGM);
    

    return res.json({

        ok:true,
        msg:'infoGM',
        /* idGM: dbGM.idGM,  
        equipo: dbGM.AKA,
        email: dbGM.Mail2, 
        name: dbGM.nickname  */
        dbGM
         
        
        
    });
};


    module.exports = {
        
        infoGMs
        
    }