
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/notary.jpg',
    caption: 'Notary',
    qr: `5;${base};notary`
  },
  {
    img: 'images/contract1.jpg',
    caption: 'Contract Machine',
    qr: `5;${base};contracts`
  },
  // {
  //   img: 'images/guarantee.jpg',
  //   caption: 'Bank guarantee',
  //   qr: `5;${base};guarantee`
  // },
  {
    img: 'images/loans.jpg',
    caption: 'Borrow more!',
    qr: `5;${base};loans`
  },
  {
    img: 'images/charity.jpg',
    caption: 'Sponsor a child',
    qr: `5;${base};charity`
  }
]
