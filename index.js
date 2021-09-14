import './scss/style.scss';
function setSectionHeight() {
    const section = document.querySelector( 'section .container' );
    if ( section.offsetHeight < (window.innerHeight - document.querySelector( 'header' ).offsetHeight - document.querySelector( 'footer' ).offsetHeight) ) {
        section.style.height = (window.innerHeight - document.querySelector( 'header' ).offsetHeight - document.querySelector( 'footer' ).offsetHeight) + 'px';
    } else {
        section.style.height = 'auto';
    }
}
setSectionHeight();
window.onresize = setSectionHeight;
console.log('NEW FUNKGIN WEB COMING SOON...')