const smartGarbage = function (trash, bins) {
  // Your code in here ... 
  bins = {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost
  }; 

  if (trash === "recycling"){ bins.recycling++; }
  else if (trash === "compost"){ bins.compost++; }
  else { bins.waste++; }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));