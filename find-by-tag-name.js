/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find a paragraph by its tag name
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM" or "Hello World!"
*/

let elm = [];
let paragraphs = document.getElementsByTagName("p");

for (let paragraph of paragraphs){
  elm.push(paragraph.innerHTML);
}

console.log(elm);
alert(elm);