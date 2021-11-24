/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info`
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM"
*/
let elm = null;
elm = document.getElementById('info').innerHTML;
alert(elm);

/* Notes

document.getElementById('identifier');
document.getElementsByTagName('p');
document.getElementsByClassName('class-name');

*/