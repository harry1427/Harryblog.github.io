$(function(){
    $(".typed").typed({
        strings: ["Designer with badass skills", "Self-educated UI designer", "All nice things maker", "Passionate photographer", "Pilsner Urquel beer lover", "Ice-hockey enthusiast", "Giant BBQ ribs-eater", "The biggest fan and hater", "Proud rider of Kawasaki Ninja", "Remarkable individual"],
        backDelay: 1200,
        loop: true,
        typeSpeed: 30
    });

    $('#main-nav').click(function(){
        $('html, body').animate({
               scrollTop: ($('main').offset().top)
        }, 1000, "easeInOutExpo");
    });
});

