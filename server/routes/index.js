var express = require('express');
var router = express.Router();
const { signUp } = require('../controllers/userController')
const upload = require("../utils/multerEngine");


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('BAD URL')
});

router.post('/signup',upload.array("resume"),signUp)

module.exports = router;
