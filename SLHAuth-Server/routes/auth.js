
const { Router} = require('express');
const { check } = require('express-validator');
const { creaUsuario, loginUsuario, renewToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


// CREAR NUEVO USUARIO

router.post('/new',[

    check('name','El nombre es obligatorio').notEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria y debe tener al menos 6 caracteres').isLength( {min: 6} ),
    validarCampos
], creaUsuario);



// LOGIN USUARIO LOGIN USUARIO LOGIN USUARIO LOGIN USUARIO

router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').isLength( {min: 6} ),
    validarCampos,
], loginUsuario);

// VALIDAR Y REVALIDAR TOKEN

router.get('/renew', validarJWT, renewToken);



module.exports = router;