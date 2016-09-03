
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/lhv.jpg',
    caption: 'LHV Bank',
    qr: `5;${base};lhv`
  },
  {
    img: 'images/crowdfunder1.jpg',
    caption: 'Crowdfunder',
    qr: `5;${base};crowdfunder`
  },
]
