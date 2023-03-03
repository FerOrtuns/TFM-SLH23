
const { response} = require('express');
const { default: mongoose } = require('mongoose');
const players = require('../models/player');




const getRoster = async (req,res = response)=>{

    const  AKA = req.params.AKA;

    const myRoster = await players.find( {TEAM: AKA}, 'PLAYER POS TIPO TEAM SALARIO YEARS OPT');

/*     console.log(myRoster);
 */
 
    return res.json(myRoster)
        };
        
         

    module.exports = {
        
        getRoster
        
    }