
const { response} = require('express');
const { default: mongoose } = require('mongoose');
const players = require('../models/player');




const getFA = async (req,res = response)=>{

    const  TEAM = "F.A";

    const faPlayers = await players.find( {TEAM: TEAM}, 'PLAYER POS TIPO TEAM SALARIO YEARS OPT');

 
    return res.json(faPlayers)
        };
        
         

    module.exports = {
        
        getFA
        
    }