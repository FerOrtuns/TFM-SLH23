

const { response } = require('express');
const { default: mongoose } = require('mongoose');
const slhnew = require('../models/SLHNew');



const mySLHNews = async (req, res = response) => {


    const campos = req.body;

    try {

        const noticiacreada = new slhnew(campos);

        /* const noticiacreada =   await slhnew.findByIdAndUpdate(slhnew.id, campos, {new:true}); */

        await noticiacreada.save();

        console.log(noticiacreada, 'noticiacreada');

        return res.status(201).json(noticiacreada);


    } catch (error) {

        console.log(error);

        return res.status(500).json({

            ok: false,
            msg: 'Por favor pongase en contacto con el Admin de la App'

        });
    };
}

const getSLHNews = async (req, res = response) => {



    const slhnewsdb = await slhnew.find({}, 'PLAYER AKA EQUIPO SALARIO YEARS desde fichadoCortado');

    console.log(slhnewsdb, 'slhnewsdb')

    return res.json(slhnewsdb)


};

module.exports = {
    mySLHNews,
    getSLHNews
}