
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/singpass.jpg',
    caption: 'E-Identity',
    qr: `5;${base};eres`
  },
  {
    img: 'images/rocket.jpg',
    caption: 'Register a Company',
    qr: `5;${base};creg`
  }
]
