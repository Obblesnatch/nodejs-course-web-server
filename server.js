var express = require('express');
var app = express();
const PORT = 3000;

var middleware = require('./middleware/custom.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function(req, res) {
	res.send('About Us Page');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function() {
	console.log('Express server started on port '+PORT);
});