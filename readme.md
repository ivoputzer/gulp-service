# gulp-service

[![travis](https://img.shields.io/travis/ivoputzer/gulp-service.svg?style=flat-square)](https://travis-ci.org/ivoputzer/gulp-service) [![npm-dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json) [![standard-js](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![npm-package-quality](http://npm.packagequality.com/shield/gulp-service.svg?style=flat-square&colorB=44CC11)](http://packagequality.com/#?package=gulp-service) [![npm-node-version](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api) [![npm-version](https://img.shields.io/npm/v/gulp-service.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/gulp-service) [![npm-license](https://img.shields.io/npm/l/gulp-service.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

This plugin is using node's child processes to let you run individual services such as restful api-servers, thus, may be restarted according to your neeeds. Issues should be reported using [github's issues tracker](https://github.com/ivoputzer/gulp-service/issues).

## install
```bash
npm install gulp-service --save-dev
```

## example
```js
// gulpfile.js

var gulp = require('gulp')
  , service = require('gulp-service');

gulp.task('run:service', function(){
  service.run('app/index.js', {
    env: {
      port: 8080
    }
  });
});

gulp.task('watch', function(){
  gulp.watch(['app/**'], ['run:service']);
});
```

```js
// app/index.js

var express = require('express')
  , app = module.exports.app = exports.app = express();

app.get('/', function(req, res){
  res.send('service is up!');
})

app.listen(process.env.port);
```
