const mongoose = require('mongoose')

const { Schema, SchemaTypes, model } = mongoose

const LocationSchema = new Schema({
  name: String,
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

// crashes app :(
// LocationSchema.methods.findDesignersByLocation = function(location) {
//   return LocationModel.select({
//     $gte: location
//   })
// }

LocationSchema.plugin(require('mongoose-autopopulate'))

const LocationModel = model('Location', LocationSchema)

module.exports = LocationModel
