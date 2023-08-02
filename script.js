//your JS code here. If required.

let secElement = document.getElementById("colorSelect");

const btn = document.querySelector("form >input");



btn.addEventListener('click',()=>{
	let index = secElement.selectedIndex;

	secElement.remove(index);
	
});


