const fs = require('fs')

module.exports = {
  save(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2))
  },
  load(filename) {
    return JSON.parse(fs.readFileSync(filename))
  },
}