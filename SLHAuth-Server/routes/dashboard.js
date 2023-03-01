
const { Router} = require('express');
const { infoGMs } = require('../controllers/dashInfoGMs.controller');

const router = Router();


router.get('/:idGM', infoGMs);



module.exports = router;