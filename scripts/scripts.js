'use stric'

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/bg-img.jpg'){
		myImage.setAttribute ('src', 'images/bg-img2.jpg')
	} else{
		myImage.setAttribute ('src', 'images/bg-img.jpg')
	}

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Пожалуйста введи своё имя.', '');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla это круто, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla это круто, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}C:\Users\Kuzmich\Documents\code\project\web-site-mdn