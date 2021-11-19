// Write a function `printCombinations`that accepts two arrays as arguments. The function should print all combinations of the elements generated by taking an element from the first array and an element from the second array. The function doesn't need to return any value. It should just print to the terminal.

const printCombinations = (
  arr1: Array<string | number>,
  arr2: Array<string | number>
) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(`${arr1[i]}-${arr2[j]}`);
    }
  }
};

printCombinations([1, 2, 3], ["a", "b", "c"]);
// 1-a
// 1-b
// 1-c
// 2-a
// 2-b
// 2-c
// 3-a
// 3-b
// 3-c
