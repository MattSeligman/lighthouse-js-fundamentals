
function loopyLighthouse(range,multiples,words){
  let startRange = range[0];
  let endRange = range[1];
  let firstMultiple = multiples[0];
  let secondMultiple = multiples[1];
  let firstReplacedWord = words[0];
  let secondReplacedWord = words[1];

  for (let i = startRange; i <= endRange; i++){ //Set start at 100, go to max 200, increment 1 each loop.
    if (i % firstMultiple === 0 && i % secondMultiple === 0){ console.log(firstReplacedWord + secondReplacedWord); }
    else if (i % firstMultiple === 0){ console.log(firstReplacedWord); }
    else if (i % secondMultiple === 0){ console.log(secondReplacedWord); }
    else {
      console.log(i); // Log Value if not Divisible by prior tests.
    }
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);