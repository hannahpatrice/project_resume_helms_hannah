$(document).ready(function () {
    //jQuery Plug In - fullpage
    $('#fullpage').fullpage();

    //jQuery Plug In - Scroll Effects
    window.sr = ScrollReveal();
        sr.reveal('.one', {delay: 250, duration: 2500});
        sr.reveal('.two', {delay: 750, duration: 2500});
        sr.reveal('.three', {delay: 1250, duration: 2500});

    //jQuery effect on button click
    $('#button').click(function () {
        console.log('one');
        $('#footer').append('<p>Thank you so much for taking the time to look over my resume! I would love to chat about web design, football, or whatever you need. Please contact me on my person cell at <a href="tel:727-433-3069">(727)433-3069</a> or via email at <a href="mailto:helmshannahpatrice@gmail.com">helmshannahpatrice@gmail.com</a>.</p>');
        console.log('two');
    });
});
