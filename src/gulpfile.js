var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');
var merge = require('merge-stream');

var paths = {
    "ts" : [
        "app/**/*.ts"
    ],
    "other": [
        '**/*.*',
        '!**/*.ts',
        '!node_modules/**',
        ],
    "libs": [
        'node_modules/**',
        '!**/tests/**',
        '!**/test/**',
        '!**/docs/**',
        '!**/typings/**',
        '!**/*.json',
        '!**/*.umd.*'
    ],
    "config": [
    ],

    "release": "../release"

};

var gulp = require("gulp");
var ts = require("gulp-typescript");
var rename = require("gulp-rename");

gulp.task("build-ts", function () {
    var tsProject = ts.createProject('./tsconfig.json');

    return gulp
        .src(paths.ts, { base: "./" })
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(rename(function (path) {
            path.extname = ".js";
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.release));
});

gulp.task('build-other', ['build-static' /*, 'build-libs' */]);

gulp.task('build-static', function() {
	var base = gulp
       .src(paths.other)
	   .pipe(gulp.dest(paths.release));

   return merge(base);
});

gulp.task('build-libs', function() {
	var libs = gulp
       .src(paths.libs, { base: "./" })
	   .pipe(gulp.dest(paths.release));

    var config = gulp
       .src(paths.config)
	   .pipe(gulp.dest(paths.release));

    return merge(libs, config);
});

gulp.task('watch', function() {
    gulp.watch(paths.ts, ['build-ts']);
    gulp.watch(paths.other, ['build-other']);
});

gulp.task('default',['build-ts','build-other']);