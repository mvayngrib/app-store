
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/notary.jpg',
    title: 'Notariiize',
    description: 'Notarize any kind of documents',
    qr: `5;${base};snotary`
  },
  {
    img: 'images/contract1.jpg',
    title: 'Shake',
    description: 'Create and sign contracts',
    qr: `5;${base};scontracts`
  },
  {
    img: 'images/corpAction.png',
    title: 'CorpTask',
    description: 'Perform corporate actions from M&A to e-shares',
    qr: `5;${base};scorpact`
  },
  {
    img: 'images/loans.jpg',
    title: 'Borrow More',
    description: 'Low interest loans inside',
    qr: `5;${base};sloans`
  },
  // {
  //   img: 'images/guarantee.jpg',
  //   title: '$ Guarantee',
  //   description: 'Friendly Bank',
  //   qr: `5;${base};sloans`
  // },
  {
    img: 'images/charity.jpg',
    title: 'The Giver',
    description: 'Sponsor a child, save a life',
    qr: `5;${base};scharity`
  }
]
