const mongoose = require("mongoose")

const DesignerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  website: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  skills: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Skills",
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
})

// DesignerSchema.methods.findPeersOver18 = function(cb) {
//   return DesignerModel.find({
//     age: {
//       $gte: 18
//     }
//   })
// }

DesignerSchema.plugin(require("mongoose-autopopulate"))

const DesignerModel = mongoose.model("Designer", DesignerSchema)

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
