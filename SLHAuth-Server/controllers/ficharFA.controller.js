

const { response} = require('express');
const { default: mongoose } = require('mongoose');
const players = require('../models/player');



const putFa = async (req, res = response)=>{

    const PLAYER = req.body.PLAYER;



try {

    
    const playerfa = await players.findOne({ PLAYER });

    if (!playerfa){

        return res.status(404).json({
            ok:false,
            msg:'no existe player con ese nombre en db',
        })     
    }

    //  ACTUALIZANDO

    console.log('playerFA', playerfa);


    const campos = req.body;
/* 
    const jugadorFichado = await players.findOneAndUpdate(playerfa, campos); */

    
    
const jugadorFichado = await players.findByIdAndUpdate(playerfa.id, campos, {new:true});



    res.json({

        ok:true,
        msg:'actualizando',
        jugadorFichado
        })

    }catch (error) {

console.log(error);

return res.status(500).json({
    
    ok:false,
    msg:'Error inesperado'
    
    });
};

}        

module.exports = {
        
    
    putFa
    
}