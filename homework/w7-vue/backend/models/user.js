const mongoose = require('mongoose')
const validator = require('validator')

const { Schema, model, SchemaTypes } = mongoose

const UserSchema = new Schema({
  name: {
    firstName: {
      type: String,
      required: true,
      minlength: 2
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2
    }
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: value => {
      return validator.isEmail(value)
    }
  },
})

UserSchema.virtual('fullName').get(function() {
  return `${this.name.firstName} ${this.name.lastName}`
})

UserSchema.virtual('fullName').set(function(name) {
  const str = name.split(' ')

  // eslint-disable-next-line prefer-destructuring
  this.name.firstName = str[0]
  // eslint-disable-next-line prefer-destructuring
  this.name.lastName = str[1]
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = model('User', UserSchema)

module.exports = UserModel


// old stuff....
// module.exports = class User {
//   constructor(name, email, inquiries = [], requests = [], id) {
//     this.name = name
//     this.email = email
//     this.inquiries = inquiries
//     this.requests = requests
//     this.id = id
//   }

//   inquireSkill(skill) {
//     // return a list of designers with that skill

//     this.inquiries.push(skill.name, skill.designers)
//     // console.log('inquiry', this.name, this.inquiries)
//   }

//   requestDesigner(skill, designer) {
//     // return the designer and email

//     this.requests.push(skill.name, [designer.name, designer.email])
//     designer.requests.push(skill.name, [this.name, this.email])
//     // console.log('user', this.requests) // testing
//     // console.log('designer', designer.requests) // testing
//   }

//   static create({ name, email, inquiries, requests, id }) {
//     return new User(name, email, inquiries, requests, id)
//   }
// }
