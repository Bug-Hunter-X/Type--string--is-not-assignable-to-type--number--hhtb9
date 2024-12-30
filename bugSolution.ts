function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both parameters must be numbers or parsable to numbers.');
  }
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both parameters must be numbers or parsable to numbers.');
  }
  return numA - numB;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 4); // 6

console.log(result1, result2); // 8 6

let result3 = addSafe(5, "3"); //8
let result4 = subtractSafe("10", 4); //6

console.log(result3, result4); // 8 6

//Error handling for invalid inputs
try {
  let result5 = addSafe("abc", 4);
} catch (error) {
  console.error(error.message); // 'Invalid input: Both parameters must be numbers or parsable to numbers.'
}

//using Type guards to handle string inputs
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafeTypeGuard(a: number | string, b: number | string): number {
  if (isNumber(a) && isNumber(b)) return a + b;  
  if (typeof a === 'string' && typeof b === 'string') return parseFloat(a) + parseFloat(b);
  if (typeof a === 'string' && isNumber(b)) return parseFloat(a) + b;
  if (isNumber(a) && typeof b === 'string') return a + parseFloat(b);
    throw new Error('Invalid input: Cannot perform addition.');
}
console.log(addSafeTypeGuard(5, "3")); //8
console.log(addSafeTypeGuard("5", 3));//8
console.log(addSafeTypeGuard("5", "3"));//8