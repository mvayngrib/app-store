
const fs = require('fs')
const Handlebars = require('handlebars')
const genData = require('./data')

module.exports = function (host) {
  const template = Handlebars.compile(fs.readFileSync('./templates/index.hbs', { encoding: 'utf8' }))
  return template(genData(host))
}
