const { Router} = require('express');
const { mySLHNews, getSLHNews } = require('../controllers/mySLHNews.controller')

const router = Router();


router.post('/', mySLHNews);

router.get('/', getSLHNews);



module.exports = router;