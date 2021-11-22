function lastIndexOf(array, index){
  
  // check if index is within array
  if (array.includes(index)){
    let output = null;

    for (let i = 0; i < array.length; i++){
      //console.log(i + " - " + array[i]); Show the Index vs Value incrementally (For Testing)
      if (index === array[i]){ output = i; }
    }
    return output;

  } else { 
    //If the value never occurs, the function should return -1.
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);