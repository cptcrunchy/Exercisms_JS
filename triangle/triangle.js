function equalLength(el,i, arr){
    return (arr[0] == el )
}

function kind(...sides){
    const validation1 = sides.every(side => side > 0);//?
    const sumOfSides = sides.reduce((a,b)=>a+b)//?
    const angle1 = sides[0] + sides[1];//?
    const angle2 = sides[1] + sides[2];//?
    
    if(validation1 && sides.every(equalLength)) return "equilateral"
    if(validation1 && sides.some(equalLength)) return "isosceles"
    if(validation1 && !sides.every(equalLength)) return "scalene"
}

kind(3,4,5)//?
// kind(3,4,4)//?
// kind(4,3,4)//?
// kind(4,4,3)//?
// kind(10,10,2)//?
// kind(3,4,5)//?



module.exports = kind;