require("./index.css");


// preloader 
const $349a00930b14e029$var$preloaderTL = gsap.timeline();
$349a00930b14e029$var$preloaderTL.to('#logo', {
    yPercent: -20,
    opacity: 0,
    delay: 4
});
$349a00930b14e029$var$preloaderTL.to('.preloader', {
    transform: 'scaleY(0)',
    transformOrigin: 'top',
    delay: '-=3'
});
// open all social links in new tab
let $349a00930b14e029$var$socialLinks = document.querySelectorAll('.social-links--box a');
$349a00930b14e029$var$socialLinks.forEach((link)=>{
    link.target = '_blank';
});
// custom cursor
const $349a00930b14e029$var$cursor = document.querySelector('.cursor');
window.onmousemove = (e)=>{
    $349a00930b14e029$var$cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 2;`);
};
// navigation
const $349a00930b14e029$var$tl = gsap.timeline({
    paused: true,
    reversed: true
});
$349a00930b14e029$var$tl.to('.box', {
    height: '100vh',
    duration: 0.5,
    transformOrigin: 'bottom',
    stagger: 0.3
});
$349a00930b14e029$var$tl.to('.mobile-logo', {
    opacity: '1'
});
$349a00930b14e029$var$tl.to('.nav-main__content', {
    opacity: '1',
    visibility: 'visible',
    yPercent: -5,
    duration: 0.5,
    transformOrigin: 'bottom',
    stagger: 0.3
});
const $349a00930b14e029$var$navIcon = document.querySelector('.nav-icon');
$349a00930b14e029$var$navIcon.onclick = function() {
    if ($349a00930b14e029$var$tl.reversed()) {
        this.classList.add('nav-anim');
        $349a00930b14e029$var$tl.play();
        document.body.classList.add('noScroll');
    } else {
        this.classList.remove('nav-anim');
        $349a00930b14e029$var$tl.reverse();
        document.body.classList.remove('noScroll');
    }
};
const $349a00930b14e029$var$allLinks = document.querySelectorAll('.list__item a');
$349a00930b14e029$var$allLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('noScroll');
        $349a00930b14e029$var$tl.reverse();
        $349a00930b14e029$var$navIcon.classList.remove('nav-anim');
    });
});


//# sourceMappingURL=index.js.map
