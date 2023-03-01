
const { Router} = require('express');
const { getRoster } = require('../controllers/players.controller');

const router = Router();


router.get('/:AKA', getRoster);



module.exports = router;