var express = require('express');
var router = express.Router();

// we npm installed request. its in the node modules folder
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	var students = ['Guido','Porscha','Hayes','Nick','Daniel'];
  	res.render('index', { 
  		title: 'Express', 
  		studentsArray: students, 
  	});
});

// router.get('/test', function(req, res, next){
// 	res.send('<h1>Router Check!</h1>');
// });

// Make a route for /weather Specifically a .get route
// Run anon function. anon function takes at least 2 args
router.get('/weather', (req,res)=>{
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
    // Make an HTTP request to the weather weatherUrl
    // B/c this is an async task, we provide an anon function to run when the task is complete
    // Error will be null if no error
    // response holds the status code and any other HTTP stuff
    // data holds the JSON if any
    request.get(weatherUrl, (error, response, data)=>{
    	console.log(typeof(data));
    	// the JSON comes back in string forat
    	// Convert it native JSON
    	var weatherData = JSON.parse(data);
    	// call res.render. takes 2 args
    	// 1. the ejs file to fetch
    	// 2. an obj that will be passed to the ejs file. Each property will be available as a var
    	// inside of the ejs file
    	res.render('weather',{weatherObject: weatherData})
    	res.send('check console.');
    })
});

module.exports = router;
