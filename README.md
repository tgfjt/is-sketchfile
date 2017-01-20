# is-sketchfile

Check if file is a [Sketch](https://www.sketchapp.com/) file.

[![Build Status](https://travis-ci.org/tgfjt/is-sketchfile.svg?branch=master)](https://travis-ci.org/tgfjt/is-sketchfile)
[![codecov](https://codecov.io/gh/tgfjt/is-sketchfile/branch/master/graph/badge.svg)](https://codecov.io/gh/tgfjt/is-sketchfile)
[![npm version](https://badge.fury.io/js/is-sketchfile.svg)](https://badge.fury.io/js/is-sketchfile)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```
$ npm install --save is-sketchfile
```

## Usage

```js
var isSketchFile = require('is-sketchfile')

isSketchFile('something.sketch')
  .then(function (isValid) {
    console.log(isValid, 'return true or false.')
  })
  .catch(function (err) {
    console.error(err)
  })
```
