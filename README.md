# is-sketchfile

Check if file is a [Sketch](https://www.sketchapp.com/) file.

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
