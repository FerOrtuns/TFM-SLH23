
const { Router} = require('express');
const { infoGMByEmail } = require('../controllers/infoGMByEmail.controller');

const router = Router();


router.get('/:email', infoGMByEmail);



module.exports = router;