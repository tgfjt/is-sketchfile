var fs = require('fs')
var path = require('path')

var sqlite3 = require('sqlite3').verbose()

function isSketchFile (file) {
  return new Promise(function (resolve, reject) {
    try {
      fs.statSync(path.resolve(file)).isFile()
    } catch (e) {
      return reject(e)
    }

    var db = new sqlite3.Database(file)

    db.serialize(function () {
      db.each('select name, value from metadata where name = "app" ', function (err, row) {
        if (err) return reject(err)

        return resolve(row.value.indexOf('com.bohemiancoding.sketch') > -1)
      })
    })

    db.close()
  })
}

module.exports = isSketchFile
