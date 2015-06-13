var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'QUIZ' });
});

/* GET author. */
router.get('/', function(req, res) {
  res.render('author', { title: 'Autor del Programa' });
});

router.get('/quize/question', quizController.question);
router.get('/quize/answer', quizController.answer);


module.exports = router;
