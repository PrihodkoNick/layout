"use strict";

/* настройки сервера */
var config = {
  server: {
    baseDir: "src",
  },
  notify: false,
};

/* подключаем gulp и плагины */
var gulp = require("gulp"),
  webserver = require("browser-sync"), // сервер для работы и автоматического обновления страниц
  plumber = require("gulp-plumber"), // модуль для отслеживания ошибок
  less = require("gulp-less"), // модуль для компиляции LESS в CSS
  autoprefixer = require("gulp-autoprefixer"), // модуль для автоматической установки автопрефиксов
  minify = require("gulp-csso"), // плагин для минимизации CSS
  uglify = require("gulp-uglify"), // модуль для минимизации JavaScript
  imagemin = require("gulp-imagemin"), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
  jpegrecompress = require("imagemin-jpeg-recompress"), // плагин для сжатия jpeg
  pngquant = require("imagemin-pngquant"), // плагин для сжатия png
  del = require("del"), // плагин для удаления файлов и каталогов
  cache = require("gulp-cache"), // модуль для кэширования
  rename = require("gulp-rename"); // плагин для переименовывания файлов

/* задачи */

// запуск сервера
gulp.task("webserver", function () {
  webserver(config);
});

// html
gulp.task("html", function () {
  return gulp
    .src("src/*.html") // выбор всех html файлов по указанному пути
    .pipe(plumber()) // отслеживание ошибок
    .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
});

// css
gulp.task("style", function () {
  return (
    gulp
      .src("src/style/style.less") // получим main.less
      .pipe(plumber()) // для отслеживания ошибок
      .pipe(less()) // less -> css
      // .pipe(
      //   autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
      //     cascade: true,
      //   })
      // )
      .pipe(gulp.dest("src/style/")) // выгружаем в src
      .pipe(webserver.reload({ stream: true }))
  ); // перезагрузим сервер
});

//js
gulp.task("js", function () {
  return (
    gulp
      .src("src/js/main.js", { allowEmpty: true }) // получим файл main.js
      .pipe(plumber()) // для отслеживания ошибок
      // .pipe(rename({ suffix: ".min" }))
      // .pipe(uglify()) // минимизируем js
      .pipe(gulp.dest("src/js/")) // положим готовый файл
      .pipe(webserver.reload({ stream: true })) // перезагрузим сервер
  );
});

// watch
gulp.task("watch", function (done) {
  webserver(config);
  gulp.watch("src/**/*.html", gulp.series("html"));
  gulp.watch("src/style/**/*.less", gulp.series("style"));
  gulp.watch("src/js/**/main.js", gulp.series("js"));

  done();
});
