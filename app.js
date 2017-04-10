var app = require('express')();
var bodyParser = require('body-parser');
var routes = require('./routes/index');

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
});
app.use(bodyParser.json());
app.use('/', routes);
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
    console.log("Magic happens on port", app.get('port'));
});


