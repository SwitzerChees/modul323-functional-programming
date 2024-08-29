const R = require('./ramda.min.js')

const sentence =
  'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).'
const filterNumbers = (chars) => chars.filter((c) => c != ' ' && !isNaN(c))

const countNumChars = R.compose(R.length, filterNumbers, R.split)

console.log(countNumChars('', sentence))
