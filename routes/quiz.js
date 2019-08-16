var express = require('express');
var router = express.Router();
const calculateResults = require('../lib/calculations')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('quiz', { title: 'Quiz!' });
});

router.post('/', function(req, res) {
  req.session.data = req.body
  res.redirect('quiz/results')
})


router.get('/results', function(req, res) {
  // use session to pull out the data you calculated above ..
  let results = calculateResults(req.session.data)
  results.candidates.sort((a, b) => (a.alignment > b.alignment) ? -1 : 1)

  res.render('results', { data: results })
})


module.exports = router;


