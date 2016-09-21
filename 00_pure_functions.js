// is this a pure function?

var toLowerCase = {
  'A':'a',
  'B':'b',
  'C':'c'
}


// is this a pure function? NO

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}, you are number ${katzDeli.length} in line.`
}

// is this a pure function?

var minimum = 21;

function canDrink(age){
  return age >= minimum;
}

canDrink(18) // false
canDrink(18) // false

minimum = 16

canDrink(18) // true

// how can we make this a pure function?

function canDrink(age, minimum){
  return age >= minimum;
}

function canDrink(age){
  const minimum = 21;
  return age >= minimum;
}


// how can we make this pure and more abstract?

function ageChecker(minimum){
  const minimumAge = minimum;
  return function(age){
    return age >= miminumAge;
  }
}

const canDrinkInUSA = ageChecker(21);
canDrinkInUSA(18) // false
canDrinkInUSA(31) // true

const canDrinkInCanada = ageChecker(19)
canDrinkInCanada(20) // true

const canDrinkInIreland = ageChecker(16);
canDrinkInIreland(18) // true

// const canDrinkInIreland = function(age){
//   const minimum = 16;
//   return age >= minimum;
// }
