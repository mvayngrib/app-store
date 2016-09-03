
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/lhv.jpg',
    caption: 'LHV Bank',
    qr: `5;${base}:44444;lhv`
  },
  {
    img: 'images/crowdfunder1.jpg',
    caption: 'Crowdfunder',
    qr: `5;${base}:44444;crowdfunder`
  },
]
