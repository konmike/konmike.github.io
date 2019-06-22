(function($) {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $(window).scroll(function() {
        var top_of_projects = $("#myprojects").offset().top;
        var top_of_contact = $("#contact").offset().top;
        var bottom_of_projects = $("#myprojects").offset().top + $("#myprojects").outerHeight();
        var bottom_of_contact = $("#contact").offset().top + $("#contact").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_projects) && (top_of_screen < bottom_of_projects)){
            $('#scroll-button').css('display', 'block');
            $('#down').css('display', 'inline-block');
        } else if((bottom_of_screen > top_of_contact) && (top_of_screen < bottom_of_contact)) {
            $('#scroll-button').css('display', 'block');
            $('#down').css('display', 'none');
        }else {
            $('#scroll-button').slideToggle('fast');
        }
    });


})( jQuery );