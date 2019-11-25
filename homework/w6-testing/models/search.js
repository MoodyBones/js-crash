const mongoose = require('mongoose')

const { Schema, SchemaTypes, model } = mongoose

const SearchSchema = new Schema({
  location: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Skill',
      autopopulate: {
        maxDepth: 1
      }
    }
  ],
  skills: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Skill',
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
})

SearchSchema.plugin(require('mongoose-autopopulate'))

const SearchModel = model('Search', SearchSchema)

module.exports = SearchModel
