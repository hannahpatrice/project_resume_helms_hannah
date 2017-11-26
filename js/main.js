$(document).ready(function () {
    $('#fullpage').fullpage();

    window.sr = ScrollReveal();
        sr.reveal('.one', {delay: 250, duration: 2500});
        sr.reveal('.two', {delay: 750, duration: 2500});
        sr.reveal('.three', {delay: 1250, duration: 2500});
});
