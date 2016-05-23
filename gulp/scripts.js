'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();


function webpackWrapper(watch, test, callback) {
    var webpackOptions = {
        watch: watch,
        module: {
            loaders: [{
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader: 'file?name=assets/fonts/[name].[ext]'
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?name=assets/images/[name].[ext]'//limit=8192&
            }]
        },
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'app.js',
            chunkFilename: '[name].chunk.js'
        },
        resolve: {
            modulesDirectories: [
                'node_modules',
                'bower_components',
                '../src/app/components/ui',
                '../src/app/components/biz',
                '../src/app/components/common',
            ],
            extensions: ['', '.js', '.styl', '.css']
        }
    };

    if (watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function(err, stats) {
        if (err) {
            conf.errorHandler('Webpack')(err);
        }
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));
        browserSync.reload();
        if (watch) {
            watch = false;
            callback();
        }
    };

    var sources = [path.join(conf.paths.src, '/app/index.module.js')];
    if (test) {
        sources.push(path.join(conf.paths.src, '/app/**/*.spec.js'));
    }

    return gulp.src(sources)
        .pipe(webpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', function() {
    return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], function(callback) {
    return webpackWrapper(true, false, callback);
});

gulp.task('scripts:test', function() {
    return webpackWrapper(false, true);
});

gulp.task('scripts:test-watch', ['scripts'], function(callback) {
    return webpackWrapper(true, true, callback);
});
