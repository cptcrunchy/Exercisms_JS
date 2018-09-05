function kind(...sides){
    const validation1 = sides.every(side => side > 0);
    const validation2 = ((sides[0] + sides[1]) || (sides[1] + sides[2])) >= sides.reduce((a,b)=>a+b,0);

    if(validation1 || validation2) {      
        if (sides.every(equalLength)) {
            return "equilateral" 
        }else if(sides.some(equalLength)) {
            return "isosceles"
        }else{
            return "scalene"
        }
    }else{
        throw new Error("Invalid sides length");
    }
}
kind(4,3,4)//?

function equalLength(el,i, arr){
    return (arr[2] == el )
}

module.exports = kind;