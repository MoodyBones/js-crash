exports.sum = (a, b) => {
  return ((a * 100 ) + (b * 100))/100
}

exports.sum = (a, b) => {
  if (typeof a == 'string' && typeof b == 'string') {
    return a + ' ' + b
  } else return a + b
}
