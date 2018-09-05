function toRoman(num){
    var roman =  {
        "M" :1000, "CM":900, "D":500, "CD":400,
        "C":100, "XC":90, "L":50, "XL":40, 
        "X":10, "IX":9, "V":5, "IV":4, "I":1
      }
    var numeral = ""
    for ( var i of Object.keys(roman)){
       var match =  Math.floor( num / roman[i])
       num -= match * roman[i]
       numeral += i.repeat(match)
    }
    return numeral
}

module.exports = toRoman;