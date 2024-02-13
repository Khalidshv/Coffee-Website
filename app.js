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

const navLink = document.querySelectorAll('.nav__link')
function linkAction (){
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader (){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    let mixerProducts = mixitup(".products__content", {
        selectors: {
            target: '.products__card'
        },
        animation: {
            duration: 300
        }
    });

    mixerProducts.filter('.delicacies')

const linkProducts = document.querySelectorAll('.products__item')
function activeProducts(){
   linkProducts.forEach(l=> l.classList.remove('active-products'))
    this.classList.add('active-product')
}

linkProducts.forEach(l=> l.addEventListener('click',activeProducts))


