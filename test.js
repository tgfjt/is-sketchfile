var test = require('tape')

var isSketchFile = require('./')

test('SketchFile test', function (t) {
  t.plan(4)

  isSketchFile('src/test.sketch').then(function (result) {
    t.ok(result, 'This is a Sketch file.')
  })

  isSketchFile('src/foobar.sketch', 'Not found').catch(function (err) {
    t.ok(err.code === 'ENOENT')
  })

  isSketchFile('src/dummy.txt', 'Text file.').catch(function (err) {
    t.ok(err.code === 'SQLITE_ERROR')
  })

  isSketchFile('src/dummy.sketch', 'Fake Sketch file.').catch(function (err) {
    t.ok(err.code === 'SQLITE_ERROR')
  })
})
