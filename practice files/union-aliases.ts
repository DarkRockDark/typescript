type Combinable = string|number;
type Conversion = 'as-number' | 'as-text';

function addUnion(input1: Combinable, input2: Combinable, resultConversion: Conversion) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") 
    || resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = addUnion(30, 26, 'as-text');
console.log(combinedAges);

const combinedNames = addUnion("Doug " ,"Rogers", 'as-number');
console.log(combinedNames);
