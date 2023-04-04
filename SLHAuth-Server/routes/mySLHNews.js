const { Router} = require('express');
const { mySLHNews } = require('../controllers/mySLHNews.controller')

const router = Router();


router.post('/', mySLHNews);

router.get('/', mySLHNews);



module.exports = router;