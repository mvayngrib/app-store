
const fs = require('fs')
const render = require('./render')
const html = render(process.argv[2] || 'http://localhost')
fs.writeFileSync('./index.html', html)
