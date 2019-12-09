const mongoose = require('mongoose')

const { Schema, SchemaTypes, model } = mongoose

const SkillSchema = new Schema({
  name: String,
  color: String,
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

SkillSchema.plugin(require('mongoose-autopopulate'))

const SkillModel = model('Skill', SkillSchema)

module.exports = SkillModel
