function judgeVegetable(vegetables, metric){
  //console.log('Metric ' + metric); 
  
  let topVegetable = null; // Temporary holder for Top Value
  let topSubmitter = null; // Temporary holder for Top Submitter

  // Loop through the vegetables
  for (let vegetable of vegetables){
    //console.log('Vegetables: ' + vegetable.submitter);
    //console.log('Vegetables '+metric+': ' + vegetable[metric]);

    // if the vegetable (based on metric) is greater than the topVegetable set the current vegetable to the Top Vegetable and Top Submitter 
    if (vegetable[metric] > topVegetable ) { 
      topVegetable = vegetable[metric]; 
      topSubmitter = vegetable.submitter; 
    }
  }

  //console.log("The vegetable with the top "+ metric + " is " + topVegetable +  " by " + topSubmitter );
  return topSubmitter;

}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
//const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));