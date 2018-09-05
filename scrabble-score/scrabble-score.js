function score(word){
    const onePoint = /[aeioulnrst]/gi;
    const twoPoints = /[dg]/gi;
    const threePoints = /[bcmp]/gi;
    const fourPoints = /[fhvwy]/gi;
    const fivePoints = /[k]/gi;
    const eightPoints = /[jx]/gi;
    const tenPoints = /[qz]/gi;
 
    const first = word.match(onePoint)
    const second = word.match(twoPoints)
    const third = word.match(threePoints)
    const fourth = word.match(fourPoints)
    const fifth = word.match(fivePoints)
    const eight = word.match(eightPoints)
    const ten = word.match(tenPoints)
    let sum = 0

    if (first  != null) {sum += first.length * 1 }
    if (second != null) {sum += second.length * 2}
    if (third  != null) {sum += third.length * 3 }
    if (fourth != null) {sum += fourth.length * 4}
    if (fifth  != null) {sum += fifth.length * 5 }
    if (eight  != null) {sum += eight.length * 8 }
    if (ten    != null) {sum += ten.length * 10  }

    return sum
}

module.exports = score;