
module.exports = function genData (host) {
  const data = getData(host)
  return {
    sections: [
      {
        title: 'Government Certified Apps',
        data: data.gov
      },
      {
        title: 'Third Party Apps',
        data: data.other
      }
    ]
  }
}

function getData (host) {
  return {
    gov: [
      {
        img: 'images/singpass.jpg',
        title: 'e-Identity',
        description: 'establish your Singaporean digital identity',
        qr: `5;${host};seres`
      },
      {
        img: 'images/rocket.jpg',
        title: 'BizReg',
        description: 'launch your biz',
        qr: `5;${host};sregco`
      }
    ],
    other: [
      {
        img: 'images/notary1.jpg',
        title: 'Notariiize',
        description: 'Notarize any kind of documents',
        qr: `5;${host};snotary`
      },
      {
        img: 'images/contract1.jpg',
        title: 'Shake on it',
        description: 'Create and sign contracts',
        qr: `5;${host};scontracts`
      },
      {
        img: 'images/corpAction.png',
        title: 'Board Decisions',
        description: 'Perform corporate actions from M&A to e-shares',
        qr: `5;${host};sboardact`
      },
      {
        img: 'images/loans.jpg',
        title: 'Borrow More',
        description: 'Low interest loans inside',
        qr: `5;${host};sloans`
      },
      {
        img: 'images/awesome.jpg',
        title: 'Awesome Bank',
        description: 'Lower interest loans inside',
        qr: `5;${host};sawesome`
      },
      // {
      //   img: 'images/guarantee.jpg',
      //   title: '$ Guarantee',
      //   description: 'Friendly Bank',
      //   qr: `5;${host};sloans`
      // },
      {
        img: 'images/charity.jpg',
        title: 'The Giver',
        description: 'Sponsor a child, save a life',
        qr: `5;${host};scharity`
      }
    ]
  }
}
