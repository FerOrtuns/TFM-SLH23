
const { response} = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const creaUsuario = async (req, res = response)=>{

    
    const { name, email, password} = req.body;


try {

         //VERIFICAR EMAIL

        const usuario = await Usuario.findOne({ email }); // {email : email}

        if (usuario){

            return res.status(400).json({
        
                ok:false,
                msg:'El usuario ya existe con ese Email'
                
                });
        }

        // crear usuario con el modelo

         const dbUser = new Usuario(req.body);

        //HASHEAR CONTRAEÑA

        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync ( password, salt );

        //GENERAL EL JWT

        const token = await generarJWT(dbUser.id, name);

        // CREAR USUARIO EN DB
        
        await dbUser.save();

        // GENERAR RESPUESTA EXITOSA

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            msg: `Usuario ${name} creado en DB correctamente`,
            name, 
            email,
            token
        });
    
} catch (error) {

    console.log(error);

    return res.status(500).json({
        
        ok:false,
        msg:'Por favor pongase en contacto con el Admin de la App'
        
        });
    };
    
};
       

    


      // LOGIN USER LOGIN USER LOGIN USER LOGIN USER LOGIN USER LOGIN USER LOGIN USER 


const loginUsuario = async (req, res = response )=>{

   
 const {  email, password} = req.body;


 try {

    const dbUser = await Usuario.findOne({email});
    
    if(!dbUser){
        return res.status(400).json({
            ok:false,
            msg:'Usuario o contraseña incorrectos'
        })
    }

    // CONFIRMAS PASSWORD HACE MATCH

    const validPassword = bcrypt.compareSync(password, dbUser.password);

    if(!validPassword){
        return res.status(400).json({

            ok:false,
            msg:'usuario o Contraseña incorrectos'
        })
    }


    // COMO TENEMOS PASS Y MAIL  OK PUES GENERAMOS EL JWT

    const token = await generarJWT(dbUser.id, dbUser.name);

    // RESPUESTA OK RETURN NO NECESARIO YA QUE ES EL ULTIMO PASO
    
   return res.status(202).json({
       ok:true,
       msg:'Login de Usuario realizado correctamente',
       uid: dbUser.id,
       name: dbUser.name,
       email: dbUser.email,
       token
   });
  


 } catch (error) {

    console.log(error);

    return res.status(500).json({
        
        ok:false,
        msg:'Por favor pongase en contacto con el Admin de la App'
        
        });
    }
};

// CONTROLADOR 3 RENOVAR TOKEN  RENOVAR TOKEN  RENOVAR TOKEN  RENOVAR TOKEN 


const renewToken = async (req,res = response)=>{

    const { uid } = req;

    const dbUser = await Usuario.findById( uid ); 
    
    const token = await generarJWT(uid, dbUser.name);
    
    return res.json({
        ok:true,
        msg:'renew',
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
        
    });
};


    module.exports = {
        creaUsuario,
        loginUsuario,
        renewToken
    }