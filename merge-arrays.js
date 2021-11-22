function merge(firstArray,secondArray){

  for(let arrayItem of secondArray){
    firstArray.push(arrayItem);
  }
  firstArray.sort();
  return firstArray;
}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]); // Expected Output: [ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ], [ 2, 5, 8 ]);          // Expected Output: [ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ], []);             // Expected Output: [ 1, 2, 6 ]