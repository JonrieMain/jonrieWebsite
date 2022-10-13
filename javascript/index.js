/* Scroll effect for up*/
var header = document.querySelector('.header');
var up = document.querySelector('#up');
window.addEventListener('scroll', () =>{
	up.classList.toggle('sticky', window.scrollY > 50);
	if(window.matchMedia("(min-width: 751px)")){
		header.classList.toggle('boxShadow', window.scrollY > 0);	
	}
});


/* Call element */
var loading = document.querySelector('.loading');
var darkMode = document.querySelector('#darkMode');
var menu = document.getElementById("menu").children;
var jonrieLogo = document.querySelector('#jonrieLogo');
var left = document.querySelector('.left');
var mainContainer = document.querySelector('.main-container');
var color = document.querySelector('#color');
var colorContainer = document.querySelector('#colorContainer');
var contact = document.querySelector('#contactTrig');
var contactMain = document.querySelector('.contactMain');
var theme = document.querySelector('.theme');
var themeBtn = document.querySelector('.themeBtn');
var carouselPrevAndNextBtn = document.querySelectorAll('#carouselPrevAndNextBtn');
var carouselPrevAndNext = document.querySelector('#certificate');




/* carousel hover */
carouselPrevAndNext.addEventListener('mouseover', ()=>{
	carouselPrevAndNextBtn.forEach(e=>e.style.display="block")
})
carouselPrevAndNext.addEventListener('mouseout', ()=>{
	carouselPrevAndNextBtn.forEach(e=>e.style.display="none")
})









const emailClick = document.querySelector('#emailClick').addEventListener('click', ()=>{
	contact.click();
});




/* Prevent right Click*/
document.body.addEventListener('contextmenu', e=> e.preventDefault());




/* contact icon shake animation */

contactShake = ()=>{
	contact.style.animation="contactAnimate 2s 1s infinite";
}
setInterval(contactShake,2000);






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





/* open close*/
themeBtn.addEventListener('click',()=>{
	if(theme.classList.contains('close')){

		/* add & remove */
		theme.classList.remove('close')
		theme.classList.add('open')

		/* change */
		themeBtn.classList.remove('fa-arrow-left')
		themeBtn.classList.add('fa-arrow-right')

		/* open*/
		theme.style.right="-.3%"
	}else{
		/* add & remove */
		theme.classList.remove('open')
		theme.classList.add('close')

		/* change */
		themeBtn.classList.add('fa-arrow-left')
		themeBtn.classList.remove('fa-arrow-right')

		/* close */
		theme.style.right="-30%"
	}
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

	/* sub carousel bg and project list bg*/
	document.querySelector('.carouselSubButton').style.background="#d1d1d12e";
	document.querySelectorAll('#bgChange').forEach(bgChange=>bgChange.style.background="#d1d1d12e")
	document.querySelector('.jonrie').style.background="#d1d1d12e";

	/* loading J color */
	document.querySelector('.loading strong').style.color="#fff";
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

	/* sub carousel bg and project list bg*/
	document.querySelector('.carouselSubButton').style.background="#d1d1d1";
	document.querySelectorAll('#bgChange').forEach(bgChange=>bgChange.style.background="#d1d1d1")
	document.querySelector('.jonrie').style.background="#d1d1d1db";

	/* loading J color */
	document.querySelector('.loading strong').style.color="#000";
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
		document.body.style.background=localStorage.getItem("themeColor");
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




// Carousel trig buttons(h3)
document.querySelector('#indi1').addEventListener('click', ()=>{
	document.querySelector('#staticWebsite').click();
});
document.querySelector('#indi2').addEventListener('click', ()=>{
	document.querySelector('#dynamicWebsite').click();
});
document.querySelector('#indi3').addEventListener('click', ()=>{
	document.querySelector('#destopApp').click();
});
document.querySelector('#indi4').addEventListener('click', ()=>{
	document.querySelector('#mobileApp').click();
});

// trig active
const activeh3 = document.querySelectorAll('.sub')
activeh3.forEach((ac) =>{

	ac.addEventListener('click', ()=>{
		/* remove */
		activeh3.forEach(rem=>rem.classList.remove('active'));
		/* add */
		ac.classList.add('active');
	});







});

