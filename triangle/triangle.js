function equalLength(el, i) {
  return (el === i)
}

function kind(...sides) {
  const validation1 = sides.every(side => side > 0) // ?
  const sumOfSides = sides.reduce((a, b) => a + b) // ?
  const angle1 = (sides[0] + sides[1]) // ?
  const angle2 = (sides[1] + sides[2]) // ?

  if (validation1 && sides.every(equalLength)) return 'equilateral'
  if (validation1 && sides.some(equalLength)) return 'isosceles'
  if (angle1 >= sumOfSides || angle2 >= sumOfSides || !validation1) {
    throw new Error('invalid lengths')
  }
  
  return 'scalene'
}

kind(5,4,2) // ?

module.exports = kind
