
const { Router} = require('express');
const { equipos } = require('../controllers/equipos.controller');

const router = Router();


router.get('', equipos);



module.exports = router;