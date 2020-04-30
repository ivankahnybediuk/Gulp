let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
    
gulp.task('autoprefixer', function () {
        return gulp.src('style.css')
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 25 versions'] ,
                cascade: false
            }))
            .pipe(gulp.dest('dist'));
    });
