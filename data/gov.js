
const base = process.argv[2] || 'http://localhost'

module.exports = [
  {
    img: 'images/singpass.jpg',
    title: 'e-Identity',
    description: 'establish your Singaporean digital identity',
    qr: `5;${base};seres`
  },
  {
    img: 'images/rocket.jpg',
    title: 'BizReg',
    description: 'launch your biz',
    qr: `5;${base};sregco`
  }
]
