const mongoose = require('mongoose')
const validator = require('validator')

const { Schema, SchemaTypes, model } = mongoose

const DesignerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  website: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  location: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Location',
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

DesignerSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`
})

DesignerSchema.virtual('fullName').set(function(name) {
  const str = name.split(' ')

  // eslint-disable-next-line prefer-destructuring
  this.firstName = str[0]
  // eslint-disable-next-line prefer-destructuring
  this.lastName = str[1]
})

DesignerSchema.plugin(require('mongoose-autopopulate'))

const DesignerModel = model('Designer', DesignerSchema)

module.exports = DesignerModel

// module.exports = class Designer {
//   constructor(name, email, website, city, country, skills = [], requests = [], id) {
//     this.name = name
//     this.email = email
//     this.website = website
//     this.city = city
//     this.country = country
//     this.skills = skills
//     this.requests = requests
//     this.id = id
//   }

//   // addSkill(skill) {
//   //   // console.log(this.name, skill.name) //testing
//   //   this.skills.push(skill.name)
//   //   // this.skills.push(skill)
//   //   skill.designers.push(this.name)
//   //   // skill.designers.push(this)
//   // }

//   static create({ name, email, website, city, country, skills, requests, id }) {
//     return new Designer(name, email, website, city, country, skills, requests, id)
//   }
// }
