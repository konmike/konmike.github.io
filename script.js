(function($) {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $(window).scroll(function() {
        var top_of_element = $("#myprojects").offset().top;
        var bottom_of_element = $("#myprojects").offset().top + $("#myprojects").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $('#up').css('display', 'block');
        } else {
            $('#up').slideToggle('fast');
        }
    });


})( jQuery );