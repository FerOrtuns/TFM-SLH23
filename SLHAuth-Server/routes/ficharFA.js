const { Router} = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { putFa } = require('../controllers/ficharFA.controller')

const router = Router();


router.put('/', putFa);



module.exports = router;