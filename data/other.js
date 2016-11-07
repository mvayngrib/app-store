
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/notary.jpg',
    caption: 'Notary',
    by: 'Singapore Notaries',
    qr: `5;${base};snotary`
  },
  {
    img: 'images/contract1.jpg',
    caption: 'Contract Machine',
    by: 'Iron Clad',
    qr: `5;${base};scontracts`
  },
  // {
  //   img: 'images/guarantee.jpg',
  //   caption: 'Bank guarantee',
  //   qr: `5;${base};guarantee`
  // },
  {
    img: 'images/loans.jpg',
    caption: 'Borrow More',
    by: 'Friendly Bank',
    qr: `5;${base};sloans`
  },
  {
    img: 'images/charity.jpg',
    caption: 'Sponsor a Child',
    by: 'Charitee',
    qr: `5;${base};scharity`
  }
]
