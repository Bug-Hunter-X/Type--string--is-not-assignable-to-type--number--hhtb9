function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 4); // 6

console.log(result1, result2); // 8 6

//Uncommon Error: Type 'string' is not assignable to type 'number'
let result3 = add(5, "3"); //Error
let result4 = subtract("10", 4); //Error