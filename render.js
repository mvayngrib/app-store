
const fs = require('fs')
const Handlebars = require('handlebars')
const template = Handlebars.compile(fs.readFileSync('./index.hbs', { encoding: 'utf8' }))
const html = template(require('./data'))

fs.writeFileSync('./index.html', html)
