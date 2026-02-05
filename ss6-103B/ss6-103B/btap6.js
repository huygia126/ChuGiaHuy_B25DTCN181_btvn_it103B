
function removeFalsy(arr) {
  return arr.filter(element => element);
}

const arr1 = [ "", false, 0, 5, 10, "Hello world!" ];
console.log("Input 1:", arr1);
console.log("Output 1:", removeFalsy(arr1));
console.log("---");

const arr2 = [ "", false, 0, undefined, null ];
console.log("Input 2:", arr2);
console.log("Output 2:", removeFalsy(arr2));
console.log("---");

const arr3 = [NaN, "test", 4];
console.log("Input 3:", arr3);
console.log("Output 3:", removeFalsy(arr3));
console.log("---");

const arr4 = ["JavaScript", 0, null, true, 7, " "];
console.log("Input 4:", arr4);
console.log("Output 4:", removeFalsy(arr4));

