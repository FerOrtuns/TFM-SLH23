
const { response} = require('express');
const jwt = require ('jsonwebtoken');



const validarJWT = ( req, res = response , next) => {

    const token = req.header('x-token');


    if(!token){ 

        return res.status(401).json({
            ok:false,
            msg:'Usuario no autorizado para realizar esta operacion, hable con el administrador de la app que es mu majo'
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid =  uid;
        


        
    } catch (error) {
        
        return res.status(401).json({
            ok:false,
            msg:'Usuario no autorizado para realizar esta operacion, dale un toke n al administrador de la app que es mu majo'
        })

    }


    //si todo ok
    next();


};





module.exports = {
    validarJWT
}