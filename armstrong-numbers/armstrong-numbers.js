function isArmStrongNumber(num){
    const pwr = num.toString().length;
    const armStrongNumber = num
    .toString()
    .split('')
    .reduce( (a,n) => a + n**pwr,0)

    return (armStrongNumber === num)
}

isArmStrongNumber(9)//?