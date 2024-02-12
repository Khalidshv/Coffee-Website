const navMenu = document. getElementById('nav-menu'),
navToggle = document. getElementById ('nav-toggle'),
navclose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})
}

/* Validate if constant exists */
if (navclose) {
navclose.addEventListener('click', () =>{
navMenu. classList.remove('show-menu')
})
}