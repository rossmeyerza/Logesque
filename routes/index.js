var express = require('express');
var router = express.Router();
var Tail = require('tail').Tail

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/config', (req, res, next) => {

	var tail = new Tail(req.body.accessLogs);

	tail.on('line', (data) => {
		console.log(data);
	})
	// console.log(req.body);
	res.render('dashboard');
})

module.exports = router;
