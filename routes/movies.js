const router = require('express').Router();
const moviesCtrl = require('../controllers/movies');

router.post('/', moviesCtrl.create);
router.get('/', moviesCtrl.index)
module.exports = router;