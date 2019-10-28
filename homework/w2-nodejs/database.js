// todo:
// save things
// read things
const fs = require('fs')

const save = function(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2))
  // console.log(data)
}

const load = function(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'))
  // console.log(data)
}

module.exports = { save, load }
