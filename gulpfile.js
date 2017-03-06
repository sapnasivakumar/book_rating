var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul');

//Paths to watch for changes using the watch task.
var paths = {
    serverTests: [
        'test/server/**/*.js'
    ],
    serverScripts: [
        'server/controllers/*.js'
    ]
};

function handleError(err) {
    console.log(err.toString());
}


//Run the server tests and generate coverage reports
gulp.task('test:server', ['test:server:coverage'], function (done) {
    gulp.src(paths.serverTests)
        .pipe(mocha())
        .on("error", handleError)
        .pipe(istanbul.writeReports({
            dir: './coverage/server',
            reporters: ['lcov', 'json', 'text', 'text-summary']
        }));
});

gulp.task('test:server:coverage', function () {
    gulp.src(paths.serverScripts)
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});
