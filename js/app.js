window.addEventListener('scroll', function() {
	setNavbarBg();
	setNavbar();
});

function setNavbarBg() {
	var top  = window.pageYOffset || document.documentElement.scrollTop;
	var navbar = document.getElementById('header');
	var logo = document.getElementById('logo-text');
	var login = document.getElementById('nav-login');
	var	signup = document.getElementById('nav-signup');

	if (top > 30) {
		navbar.classList.add('header-scrolled');
		logo.style.color = "#FF5A5F";
		logo.style.letterSpacing = "10px";
		signup.style.color = "#484848";
		login.style.color = "#484848";
	}else{
		navbar.classList.remove('header-scrolled');
		logo.style.color = "#FFF";
		logo.style.letterSpacing = "-5px";
		signup.style.color = "#FFF";
		login.style.color = "#FFF";
	}
}

function setNavbar(){
	var top = window.pageY0ffset || document.documentElement.scrollTop;
	var navbar = document.getElementById('header');

	if (top > 550){
		navbar.style.top = "-100px";
	}else{
		navbar.style.top = "0";
	}

}
