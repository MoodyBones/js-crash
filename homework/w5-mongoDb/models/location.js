const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  name: String,
  designers: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Designer',
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
})

LocationSchema.plugin(require('mongoose-autopopulate'))

const LocationModel = mongoose.model('Location', LocationSchema)

module.exports = LocationModel
