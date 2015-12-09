var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

var tsProject = ts.createProject('./src/tsconfig.json');

var paths = {
    "ts" : ["src/**/*.ts"],
    "other": ['src/**/*.*','!src/**/*.ts']
};



var gulp = require("gulp");
var ts = require("gulp-typescript");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("build-ts", function () {

    // The `base` part is needed so
    //  that `dest()` doesnt map folders correctly after rename
    return gulp.src(paths.ts, { base: "./src/" })
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename(function (path) {
            path.extname = ".js";
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("release"));
});


gulp.task('build-ts-0', function() {
    return gulp.src(paths.ts)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('release'));
});

gulp.task('build-other', function() {
	gulp.src(paths.other)
	.pipe(gulp.dest('release'));

});


gulp.task('watch', function() {
    gulp.watch(paths.ts, ['build-ts']);
    gulp.watch(paths.other, ['build-other']);
});

gulp.task('default',['build-ts','build-other']);