
const { Router} = require('express');
const { infoGMs } = require('../controllers/dashInfoGMs.controller');

const router = Router();


router.get('/:AKA', infoGMs);



module.exports = router;