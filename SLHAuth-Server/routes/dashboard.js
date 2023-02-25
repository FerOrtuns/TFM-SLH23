
const { Router} = require('express');
const { infoGMs } = require('../controllers/dashInfoGMs.controller');

const router = Router();


router.get('/infoGMs', infoGMs);



module.exports = router;