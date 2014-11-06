var coffee, destinations, express, express_port, express_root, gulp, gutil, jade, livereload, livereload_port, lr, refresh, sass, sources, tinylr;
gulp = require('gulp');
jade = require('gulp-jade');
gutil = require('gulp-util');
sass = require('gulp-sass');
coffee = require('gulp-coffee');
express = require('express');
livereload = require('connect-livereload');
tinylr = require('tiny-lr');
lr = void 0;



















express_port = 4000;
express_root = __dirname + '/output/';
livereload_port = 35729;
sources = {
	jade: "jade/**/*.jade",
	coffee: "coffee/**/*.coffee",
	sass: "sass/**/*.sass",
	overwatch: "output/**/*.{js,html,css}"
};
destinations = {
	html: "output/",
	js: "output/js/",
	css: "output/css"
};
gulp.task('serve', function(event) {
	var app;
	app = express();
	app.use(livereload());
	app.use(express["static"](express_root));
	app.listen(express_port);
	lr = tinylr();
	lr.listen(livereload_port);




var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus')




var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose'); 

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/config.js')[env]; 

require('./server/config/express')(app,config); 
require('./server/config/mongoose')(config); 
require('./server/config/routes')(app); 






// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});













// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%// 


});





refresh = function(event) {
	var fileName;
	fileName = require('path').relative(express_root, event.path);
	gutil.log.apply(gutil, [gutil.colors.magenta(fileName), gutil.colors.cyan('changed')]);
	return lr.changed({
		body: {
			files: [fileName]
		}
	});
};
gulp.task("jade", function(event) {
	return gulp.src("jade/documents/**/*.jade").pipe(jade({
		pretty: true
	})).pipe(gulp.dest(destinations.html));
});



gulp.task('coffee', function(event) {
	return gulp.src(sources.coffee).pipe(coffee()).pipe(gulp.dest(destinations.js));
});
gulp.task("sass", function(event) {
	return gulp.src(sources.sass).pipe(sass({
		style: "compressed"
	})).pipe(gulp.dest(destinations.css));
});
gulp.task("watch", function() {
	gulp.watch(sources.jade, ["jade"]);
	gulp.watch(sources.sass, ["sass"]);
	gulp.watch(sources.coffee, ["coffee"]);
	gulp.watch(sources.overwatch, refresh);
});
gulp.task("default", ["serve", "jade", "coffee", "sass", "watch"]);











