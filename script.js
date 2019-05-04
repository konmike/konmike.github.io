(function($) {

    $('a.tlacitko').click(function(e) {
        let cil = $(this).attr('href');
        let menu = $('#menu');
        let rychlost = 1000;

        $("html, body").stop().animate(
            { scrollTop: $(cil).offset().top - menu.height() },
            rychlost);

        e.preventDefault();
    });


})( jQuery );