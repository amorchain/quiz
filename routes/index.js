var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

var creditsController = require('../controllers/credits_controller');

router.get('/author', creditsController.credits);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'QUIZ' });
});

/* GET author. */
router.get('/author', function (req, res, next) {
  res.render('author', {});
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);


module.exports = router;
