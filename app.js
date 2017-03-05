var app = require('express')();
var bodyParser = require('body-parser');
var routes = require('./routes/index');

app.use(bodyParser.json());
app.use('/', routes);
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
    console.log("Magic happens on port", app.get('port'));
});


