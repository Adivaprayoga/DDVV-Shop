window.addEventListener('scroll', function() {
	setNavbarBg();
	setNavbar();
});

function setNavbarBg() {
	var top  = window.pageYOffset || document.documentElement.scrollTop;
	var navbar = document.getElementById('header');

	if (top > 30) {
		navbar.classList.add('header-scrolled');
	}else{
		navbar.classList.remove('header-scrolled');
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
