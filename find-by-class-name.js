// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result

let names = [];
let theClasses = document.getElementsByClassName("name");

for (let theClass of theClasses){
  names.push(theClass.innerHTML);
}

console.log(names);
alert(names);