/* Scroll effect for up*/
var header = document.querySelector('.header');
var up = document.querySelector('#up');
window.addEventListener('scroll', () =>{
	up.classList.toggle('sticky', window.scrollY > 0);
	header.classList.toggle('boxShadow', window.scrollY > 0);
});


/* Call element */
var loading = document.querySelector('.loading');
var darkMode	 = document.querySelector('#darkMode');
var menu = document.getElementById("menu").children;
var jonrieLogo = document.querySelector('#jonrieLogo');
var left = document.querySelector('.left');
var mainContainer = document.querySelector('.main-container');
var color = document.querySelector('#color');
var colorContainer = document.querySelector('#colorContainer');
var contact = document.querySelector('.fa-envelope');
var contactMain = document.querySelector('.contactMain');

/* Prevent right Click*/
document.body.addEventListener('contextmenu', e=> e.preventDefault());




/* contact */
contact.addEventListener('click', ()=>{
	if(contactMain.classList.contains('close')){
		contactMain.style.top="0";
		contactMain.classList.remove('close');
		contactMain.classList.add('open');
	}else{
		contactMain.style.top="-150%";
		contactMain.classList.add('close');
		contactMain.classList.remove('open');
	}
});
/* contact icon shake animation */

contactShake = ()=>{
	contact.style.animation="contactAnimate 2s 1s infinite";
}
 setInterval(contactShake,2000);








/* loading */
window.addEventListener('load', ()=>{

		/* do if window is loaded */
	loadingFunc = ()=>{
		loading.style.display="none";
		mainContainer.style.opacity="1";
		clearInterval(count);
	}
	/* timer for loadingFunc */
	var count = setInterval(loadingFunc,500);
});




/* Color picker*/
color.addEventListener('click', ()=>{
	/* do if color is onClick */
	checkColor = ()=>{
		document.body.style.background=color.value;
		header.style.background=color.value;
		localStorage.setItem("themeColor", color.value)
	}
	/* timer */
	const countColor = setInterval(checkColor,.1)


	/* clear interval if click is outside color container */
	document.addEventListener('click', (event)=>{
		if(event.target.closest("#colorContainer")){
			/* return none if inside click */
			return true
		}else{
			/* clearn interval if outside click*/
			clearInterval(countColor)
		}


	})


})



/* --------------------- Function for dark ---------------------------- */
darkFunc = () =>{
	document.body.style.background="black";
	document.body.classList.remove('light')
	document.body.classList.add('dark')
	document.body.style.color="white";
	darkMode.classList.remove('fa-moon')
	darkMode.classList.add('fa-sun')
	darkMode.style.color="gold";
	header.style.background="black";
	for (var i = 0; i < menu.length; i++) {
		menu[i].style.color = "white";
	}
	jonrieLogo.style.color="white";
	localStorage.setItem("themeColor", "dark");
}


/* --------------------- Function for light ---------------------------- */
lightFunc = () =>{
	document.body.style.background="white";
	document.body.classList.remove('dark')
	document.body.classList.add('light')
	document.body.style.color="black";
	darkMode.classList.add('fa-moon')
	darkMode.classList.remove('fa-sun')
	darkMode.style.color="#000";
	header.style.background="white";
	for (var i = 0; i < menu.length; i++) {
		menu[i].style.color = "black";
	}
	jonrieLogo.style.color="black";
	localStorage.setItem("themeColor", "light");
}

/* --------------------- check localStorage ---------------------------- */
check = () =>{
	if(localStorage.getItem("themeColor") === null) {
		return true
	}else if(localStorage.getItem("themeColor") === "light"){
		lightFunc();
	}else if(localStorage.getItem("themeColor") === "dark"){
		darkFunc();
	}else{
		body.style.background=localStorage.getItem("themeColor");
		header.style.background=localStorage.getItem("themeColor");
	}
}
/* run */
check();
/* --------------------- Dark and light mode ---------------------------- */
darkMode.addEventListener('click',()=>{
	if(document.body.classList.contains('light')){
		darkFunc();
	}else{
		lightFunc();
	}
});



