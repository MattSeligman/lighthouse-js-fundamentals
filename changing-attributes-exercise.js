// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400

let image = document.getElementById("lhl-logo");
image.width = 200;

function setSize() {
	document.getElementById("lhl-logo").width = 400;
}

setTimeout(setSize, 1000);