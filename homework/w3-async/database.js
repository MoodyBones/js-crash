const fs = require('fs')

// const save = function(filename, data) {
//   fs.writeFile(filename, JSON.stringify(data, null, 2))
// }

// const load = function(filename, handler) {
//   fs.readFile(filename, 'utf8', (err, file) => {
//     if (err) {
//       console.log('there is a read error', err)
//       handler(err)
//       return
//     }
//     handler(null, JSON.parse(file))
//   })
// }

// module.exports = { save, load }


module.exports = {
  save(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2))
  },
  load(filename) {
    return JSON.parse(fs.readFileSync(filename))
  },
}