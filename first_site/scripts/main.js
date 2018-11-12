var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/google.png'){
		myImage.setAttribute('src','images/firefox.png');
	}
	else{
		myImage.setAttribute('src','images/google.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUser(){
	var Name = prompt('Please Enter your name: ');
	localStorage.setItem('name',Name);
	myHeading.innerHTML = Name + '\'s first web';
}
if(!localStorage.getItem('name')){
	setUser();
}
else{
	var storedname = localStorage.getItem('name');
	myHeading.innerHTML = storedname + '\'s first web';
}
myButton.onclick = function(){
	setUser();
}
