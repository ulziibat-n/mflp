import './scss/style.scss';
function setSectionHeight() {
    const section = document.querySelector( 'section .container' );
    section.style.height = (window.innerHeight - document.querySelector( 'header' ).offsetHeight - document.querySelector( 'footer' ).offsetHeight) + 'px';
}
setSectionHeight();
window.onresize = setSectionHeight;
console.log('NEW FUNKGIN WEB COMING SOON...')