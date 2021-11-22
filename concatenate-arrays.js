function concat(firstArray,secondArray){

  for(let arrayItem of secondArray){
    firstArray.push(arrayItem);
  }
  return firstArray;
}

concat([ 1, 2, 3 ], [ 4, 5, 6 ]);   // Expected Output: [ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);   // Expected Output:[ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);            // Expected Output:[ 9, 7, 2 ]
concat([ 5, 10 ], []);              // Expected Output:[ 5, 10 ]
