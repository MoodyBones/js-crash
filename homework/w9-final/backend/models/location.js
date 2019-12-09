const mongoose = require('mongoose')

const { Schema, SchemaTypes, model } = mongoose

const LocationSchema = new Schema({
  name: String,
  country: String,
  designers: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Designer',
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
})



LocationSchema.plugin(require('mongoose-autopopulate'))

const LocationModel = model('Location', LocationSchema)

module.exports = LocationModel
