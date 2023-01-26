




/* Scroll effect for up*/
var header = document.querySelector('.header');
var up = document.querySelector('#up');
window.addEventListener('scroll', () =>{
	up.classList.toggle('sticky', window.scrollY > 50);
	header.classList.toggle('hideHeader', window.scrollY > 300)
});


/* Call element */
var loading = document.querySelector('.loading');
var darkMode = document.querySelector('#darkMode');
var menu = document.getElementById("menu").children;
var jonrieLogo = document.querySelector('#jonrieLogo');
var left = document.querySelector('.left');
var mainContainer = document.querySelector('.main-container');
var contact = document.querySelector('#contactTrig');
var contactMain = document.querySelector('.contactMain');
var themeBtn = document.querySelector('.themeBtn');
var carouselPrevAndNextBtn = document.querySelectorAll('#carouselPrevAndNextBtn');
var carouselPrevAndNext = document.querySelector('#certificate');

let about = document.querySelector('.about');



















/* Prevent right Click*/
document.body.addEventListener('contextmenu', e=> e.preventDefault());




/* contact icon shake animation */

contactShake = ()=>{
	contact.style.animation="contactAnimate 2s 1s infinite";
}
setInterval(contactShake,2000);












/* --------------------- Function for dark ---------------------------- */
darkFunc = () =>{
	document.querySelector('.labelTheme').style.display="none";
	document.querySelector('.labelTheme2').style.display="block";

	document.body.style.background="black";
	document.body.classList.remove('light')
	document.body.classList.add('dark')
	document.body.style.color="white";
	darkMode.classList.remove('fa-moon')
	darkMode.classList.add('fa-sun')
	header.style.background="black";
	for (var i = 0; i < menu.length; i++) {
		menu[i].style.color = "white";
	}
	darkMode.style.color="gold";
	
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

	document.querySelector('.labelTheme').style.display="block";
	document.querySelector('.labelTheme2').style.display="none";

	// background change to white
	document.body.style.background="white";
	// remove and add 
	document.body.classList.remove('dark')
	document.body.classList.add('light')
	// set some element to color white
	document.body.style.color="black";
	// change classlist of darkmode
	darkMode.classList.add('fa-moon')
	darkMode.classList.remove('fa-sun')
	// change header background to white
	header.style.background="white";
	// loop all header list and set a color to black
	for (var i = 0; i < menu.length; i++) {
		menu[i].style.color = "black";
	}
	// set color of darkmode icon to black
	darkMode.style.color="#000";
		// set my logo to color black
	jonrieLogo.style.color="black";
	// save to local storage
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







const emailClick = document.querySelector('#emailClick').addEventListener('click', ()=>{
	contact.click();
});
	
					/* carousel hover */
	carouselPrevAndNext.addEventListener('mouseover', ()=>{
		carouselPrevAndNextBtn.forEach(e=>e.style.display="block")
	})
	carouselPrevAndNext.addEventListener('mouseout', ()=>{
		carouselPrevAndNextBtn.forEach(e=>e.style.display="none")
	})





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





// change animation function
changePic = ()=>{
	setTimeout(()=>{
		// pos1
		document.querySelector('.pos').src="./images/pos1.png";


		//pos2
		setTimeout(()=>{
			document.querySelector('.pos').src="./images/pos2.png";




			//pos3
		setTimeout(()=>{
			document.querySelector('.pos').src="./images/pos3.png";





			//pos4
		setTimeout(()=>{
			document.querySelector('.pos').src="./images/pos4.png";
		},3000)//for pos4



		},3000)//for pos 3


		},3000)//for pos2


	},100)//for pos1
} 
document.querySelector('.pos').addEventListener('mouseover', ()=>{
	changePic()
})





