'use strict';

// Пути к папкам
const dirs = {
	source: 'src',  
	dist: 'dist'
};

// Определим необходимые инструменты
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const objectFitImages = require('postcss-object-fit-images');
// const replace = require('gulp-replace');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const cheerio = require('gulp-cheerio');
// const svgstore = require('gulp-svgstore');
// const svgmin = require('gulp-svgmin');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-cleancss');
const pug = require('gulp-pug');
const wait = require('gulp-wait');
const htmlbeautify = require('gulp-html-beautify');

// Плагины postCSS
let postCssPlugins = [
	autoprefixer({                                          
		browsers: ['last 2 version']
	}),
	mqpacker({                                               
		sort: true
	}),
	objectFitImages(),
];

// // Cписок обрабатываемых файлов в указанной последовательности
// let jsList = [
// 	'./node_modules/jquery/dist/jquery.min.js',
// 	'./node_modules/jquery-migrate/dist/jquery-migrate.min.js',
// 	'./node_modules/svg4everybody/dist/svg4everybody.js',
// 	'./node_modules/object-fit-images/dist/ofi.js',
// 	dirs.source + '/js/script.js',
// ];

// Компиляция и обработка CSS
gulp.task( 'style', () => {
	return gulp.src( `${dirs.source}/scss/style.scss` )        // какой файл компилировать
		.pipe( plumber({                                        // при ошибках не останавливаем автоматику сборки
			errorHandler: function( err ) {
				notify.onError({
					title: 'Styles compilation error',
					message: err.message
				})( err );
				this.emit( 'end' );
			}
		}))
		.pipe( wait( 100 ) )
		.pipe( sourcemaps.init() )                               // инициируем карту кода
		.pipe( sass() )                                          // компилируем
		.pipe( postcss( postCssPlugins ) )                         // делаем постпроцессинг
		.pipe( sourcemaps.write('/') )                           // записываем карту кода как отдельный файл
		.pipe( gulp.dest( `${dirs.dist}/css/` ) )                 // записываем CSS-файл
		.pipe( browserSync.stream( { match: '**/*.css' } ) )         // укажем browserSync необходимость обновить страницы в браузере
		.pipe( rename( 'style.min.css' ) )                         // переименовываем (сейчас запишем рядом то же самое, но минимизированное)
		.pipe( cleanCSS() )                                      // сжимаем и оптимизируем
		.pipe( gulp.dest(dirs.dist + '/css/') );                // записываем CSS-файл
});

// Компиляция pug
gulp.task('pug', () => {
	return gulp.src( `${dirs.source}/pug/*.pug` )
		.pipe( plumber() )
		.pipe( pug() )
		.pipe( htmlbeautify() )
		.pipe( gulp.dest( dirs.dist ) );
});

// Копирование шрифтов
gulp.task( 'fonts', () => {
	return gulp.src( `${dirs.source}/fonts/*.{ttf,woff,woff2,eot,svg}` )
		.pipe(gulp.dest( `${dirs.dist}/fonts` ));
});


// Конкатенация и углификация Javascript
gulp.task('js', () => {
	return gulp.src( `${dirs.source}/js/*.js` )
		.pipe(plumber({ errorHandler: onError }))             // не останавливаем автоматику при ошибках
		.pipe(concat('script.min.js'))                        // конкатенируем все файлы в один с указанным именем
		// .pipe(uglify())                                       // сжимаем
		.pipe(gulp.dest( `${dirs.dist}/js` ));                 // записываем
});

// Очистка dist перед сборкой
gulp.task( 'clean', () => {
	return del([
		`${dirs.dist}/**/*`
	]);
} );

// Минификация изображений
gulp.task( 'img', ( callback ) => {
	return gulp.src( `${dirs.source}/img/**/*.{jpg,jpeg,gif,png,svg}` )
		.pipe( imagemin({
			progressive: true,
			svgoPlugins: [ { removeViewBox: false } ],
			use: [ pngquant() ]
		}))
		.pipe( gulp.dest( `${dirs.dist}/img` ) );
	}
);

// Сборка всего
gulp.task( 'build', ( callback ) => {
	gulpSequence(
		'clean',
		'img',
		[ 'style', 'fonts', 'js' ],
		'pug',
		callback
	);
});

// Задача по умолчанию
gulp.task( 'default', [ 'serve' ] );

// Локальный сервер, слежение
gulp.task( 'serve', [ 'build' ], () => {
	browserSync.init({
		server: dirs.dist,
		startPath: 'index.html',
		open: false,
		port: 3000,
	});

	// Слежение за стилями
	gulp.watch([
		dirs.source + '/scss/*.scss'
	], [ 'style' ]);

	// Слежение за pug
	gulp.watch([
		dirs.source + '/pug/**/*.pug',
	], ['watch:pug']);

	// Слежение за изображениями
	gulp.watch([
		dirs.source + '/img/**/*.{jpg,jpeg,gif,png,svg}',
	], ['watch:img']);

	// Слежение за шрифтами
	gulp.watch(dirs.source + '/fonts/*.{ttf,woff,woff2,eot,svg}', ['watch:fonts']);

	// Слежение за JS
	gulp.watch([
		dirs.source + '/js/*.js'
	], [ 'watch:js' ]);
});

// Браузерсинк
gulp.task('watch:pug', ['pug'], reload);
gulp.task('watch:img', ['img'], reload);
gulp.task('watch:fonts', ['fonts'], reload);
gulp.task('watch:js', ['js'], reload);


// Перезагрузка браузера
function reload (done) {
	browserSync.reload();
	done();
}

let onError = function (err) {
	notify.onError({
		title: 'Error in ' + err.plugin,
	})( err );
	this.emit('end');
};