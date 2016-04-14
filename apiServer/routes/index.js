var express = require('express');
var router = express.Router();
var docsets = require('../public/docsets');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/docsets', function (req, res, next) {
    res.send({success: 200, data: docsets});
});

module.exports = router;
