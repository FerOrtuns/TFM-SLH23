
const { Router} = require('express');
const { getFA } = require('../controllers/getFA.controller');

const router = Router();


router.get('', getFA);



module.exports = router;

