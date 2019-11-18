const mongoose = require('mongoose')

const SearchSchema = new mongoose.Schema({
  location: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Skill',
      autopopulate: {
        maxDepth: 1
      }
    }
  ],
  skills: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Skill',
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
})

SearchSchema.plugin(require('mongoose-autopopulate'))

const SearchModel = mongoose.model('Search', SearchSchema)

module.exports = SearchModel
