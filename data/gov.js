
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/eresidency.png',
    caption: 'E-residency',
    // qr: `5;${base};eres`
  },
  {
    img: 'images/caal1.png',
    caption: 'Company and activity licence',
    qr: `5;${base};caal`
  },
  {
    img: 'images/cal1.png',
    caption: 'Culture and leisure',
    qr: `5;${base};cal`
  },
  {
    img: 'images/environment1.png',
    caption: 'Environment',
    qr: `5;${base};environment`
  }
]
