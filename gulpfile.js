var gulp = require("gulp");

// var ts = require("gulp-typescript"); 
// var tsProject = ts.createProject("tsconfig.json");
// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest(paths.js));
// });

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var watchify = require("watchify"); //监听ts变化 实时编译
var gutil = require("gulp-util"); // 压缩代码

var uglify = require('gulp-uglify');//混淆代码
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var connect = require('gulp-connect');//实时刷新
var less = require('gulp-less');

/* 输入目录 */
var entryDir = {
    pages: ['src/*.html'],
    js: ['src/assets/ts/main.ts'],
    css: ['src/assets/less/index.less', 'src/assets/less/detail.less'],
    html: ['src/views/**/*'],
    img: ["src/assets/image/**/*"]
}
/* 输出目录 */
var outDir = {
    js: 'dist/assets/js',
    css: 'dist/assets/css',
    html: 'dist/view',
    img: 'dist/assets/image'
}

/* css 任务 */
gulp.task('css', function () {
    gulp.src(entryDir.css)
        .pipe(less())
        .pipe(gulp.dest(outDir.css));//将会在src/css下生成index.css以及detail.css
});


/* copy=>html img 任务 */
gulp.task('copyHtml', function () {
    gulp.src(entryDir.html)
        .pipe(gulp.dest(outDir.html));
});
gulp.task('copyImg', function () {
    gulp.src(entryDir.img)
        .pipe(gulp.dest(outDir.img));
});

/* ts 任务 */
var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: entryDir.js,
    cache: {},
    packageCache: {}
}).plugin(tsify));

function bundle() {
    return watchedBrowserify
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outDir.js))
}
gulp.task("ts", bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);


/* watch 任务  */
gulp.task('watch',function(){
    gulp.watch(entryDir.css,['css']);
    gulp.watch(entryDir.html,['copyHtml']);
    gulp.watch(entryDir.img,['copyImg']);
})


/* server 任务 */
gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        port: 0105,
        open: true
    });
});

gulp.task('default', ['ts', 'css', 'copyImg', 'copyHtml', 'watch','webserver']);

// watchedBrowserify.on("update",bundle)