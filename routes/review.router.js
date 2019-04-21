var express = require('express');
var router = express.Router();
var reviewCtrl = require('../controllers/review.ctrl');

router.get('',reviewCtrl.get);
router.post('',reviewCtrl.save);

module.exports = router;
