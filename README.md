# is-sketchfile

Check if file is a [Sketch](https://www.sketchapp.com/) file.

[![Build Status](https://travis-ci.org/tgfjt/is-sketchfile.svg?branch=master)](https://travis-ci.org/tgfjt/is-sketchfile)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```
$ npm install --save @tgfjt/is-sketchfile
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
