
const fs = require('fs')
const proc = require('child_process')
const localip = require('node-localip')
const render = require('./render')

if (process.argv[2]) return run(process.argv[2])

localip(function (err, ip) {
  if (err || !ip) {
    err = err || new Error('ip not found')
    console.error(err)
    process.exit(1)
  }

  console.log('localip: ' + ip)
  run(`http://${ip}:44444`)
})

function run (host) {
  fs.writeFileSync('./index.html', render(host))
  proc.execSync('./node_modules/.bin/ecstatic', {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit'
  })
}
