const BaseService = require('./base-service')
const SearchModel = require('../models/search')

class SearchService extends BaseService {
  model = SearchModel

  // async getSkills(designer, skill) {
  //   designer.skills.push(skill)
  //   skill.designers.push(designer)
  //   await designer.save()
  //   await skill.save()
  // }

  // async getLocations(designer, location) {
  //   designer.location.push(location)
  //   location.designers.push(designer)
  //   await designer.save()
  //   await location.save()
  // }
}

module.exports = new SearchService()
