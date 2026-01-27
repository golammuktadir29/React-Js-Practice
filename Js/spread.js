const test = [];
const testCopy = [...test];
console.log(testCopy); //[]

const obj = {
  a: 1,
  b: 2,
};

const arr = ["value1", "value2", "value3"];
const mixedArray = [...test, { ...obj }, ...arr]; //[ { a: 1, b: 2 }, 'value1', 'value2', 'value3' ]
console.log(mixedArray);
