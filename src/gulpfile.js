var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var jspm = require("gulp-jspm");

var paths = {
    "ts" : [
        "app/**/*.ts"
    ],
    "other": [
        '**/*.*',
        // '!index.*',
        '!**/*.ts',
        "!node_modules/**",
        "!jspm_packages/**"
        ],
    "libs": [
        'node_modules/systemjs/**',
        'node_modules/angular2/bundles/**',
        'node_modules/rxjs/**',
        '!**/tests/**',
        '!**/test/**',
        '!**/docs/**',
        '!**/typings/**',
        '!**/*.json',
        '!**/systemjs/lib/**',
        '!**/*.umd.*'
    ],
    "config": [
        'jspm_packages/system.js',
        // 'config.js'
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

gulp.task('build-other', ['build-static', 'build-libs']);

gulp.task('build-static', function() {
	var base = gulp
       .src(paths.other)
	   .pipe(gulp.dest(paths.release));

    // var index = gulp
    //    .src('index.release.html')
    //     .pipe(rename(function (path) {
    //         path.basename = "index";
    //     }))
    //    .pipe(gulp.dest(paths.release));

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

gulp.task('bundle', function() {
    return gulp
        .src('app/index.js')
        .pipe(jspm())
        .pipe(gulp.dest(paths.release));
})

gulp.task('watch', function() {
    gulp.watch(paths.ts, ['build-ts']);
    gulp.watch(paths.other, ['build-other']);
});

gulp.task('default',['build-ts','build-other']);