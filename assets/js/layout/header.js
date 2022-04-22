$(document).ready(function(){

    // GNB
    $('#gnb_btn').click(function () {
        if ($('#gnb_btn').hasClass('open')) {
            $(this).removeClass('open');
            $('nav').css('top', '-100%');
            $('html').removeClass('stop-scrolling');
        } else {
            $(this).addClass('open')
            $('nav').css('top', 0);
            $('html').addClass('stop-scrolling');
        }
    })

    // Header Scroll
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let headerHeight = $('header').height();

        if (scrollPos > headerHeight) {
            $('header').addClass('scrolled')
            $('.text_logo').fadeIn(500);
        } else {
            $('header').removeClass('scrolled');
            $('.text_logo').hide();
            
        }
    })
})