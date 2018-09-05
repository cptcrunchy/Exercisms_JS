import ArmstrongNumber from './armstrong-numbers';

describe('ArmstrongNumber', function () {
  test('Single digit numbers are Armstrong numbers', () =>{
    var input = 5;
    expect(ArmstrongNumber(input)).toBe(true);
  })
  test('There are no 2 digit Armstrong numbers', () =>{
    var input = 10;
    expect(ArmstrongNumber(input)).toBe(false);
  }) 
  test('Three digit number that is an Armstrong number', () =>{
    var input = 153;
    expect(ArmstrongNumber(input)).toBe(true);
  }) 
  test('Three digit number that is not an Armstrong number', () =>{
    var input = 100;
    expect(ArmstrongNumber(input)).toBe(false);
  }) 
  test('Four digit number that is an Armstrong number', () =>{
    var input = 9474;
    expect(ArmstrongNumber(input)).toBe(true);
  }) 
  test('Four digit number that is not an Armstrong number', () =>{
    var input = 9475;
    expect(ArmstrongNumber(input)).toBe(false);
  }) 
  test('Seven digit number that is an Armstrong number', () =>{
    var input = 9926315;
    expect(ArmstrongNumber(input)).toBe(true);
  }) 
  test('Seven digit number that is not an Armstrong number', () =>{
    var input = 9926314;
    expect(ArmstrongNumber(input)).toBe(false);
  })  
});
