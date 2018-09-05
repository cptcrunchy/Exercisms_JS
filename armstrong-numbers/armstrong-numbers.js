function validate(num){
    const pwr = num.toString().length;
    const armStrongNumber = num
    .toString()
    .split('')
    .reduce( (a,n) => a + n**pwr,0)

    return (armStrongNumber === num)
}

module.exports = validate;