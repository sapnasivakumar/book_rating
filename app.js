// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//
// var index = require('./routes/index');
// var users = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', index);
// app.use('/users', users);
//
//
//
//
// var models = require('./server/models/');
// models.sequelize
//     .authenticate()
//     .then(function () {
//         console.log('Connection successful');
//     })
//     .catch(function(error) {
//         console.log("Error creating connection:", error);
//     });
//
//
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;


var app = require('express')(),
    authors = require('./server/controllers/authors'),
    books = require('./server/controllers/books');

app.use(bodyParser.json());

app.get('/authors', authors.index);
app.get('/authors/:id', authors.show);
app.post('/authors', authors.create);
app.put('/authors/:id', authors.update);
app.delete('/authors', authors.delete);

app.get('/books', books.index);
app.get('/books/:id', books.show);
app.post('/books', books.create);
app.put('/books/:id', books.update);
app.delete('/books', books.delete);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
    console.log("Magic happens on port", app.get('port'));
});


