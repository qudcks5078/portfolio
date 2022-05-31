$(document).ready(function () {

    let WindowWidth = $(window).width();

    // GNB
    $('#gnb_btn').click(function () {
        let navH = $('.nav_inner').height();
        if ($('#gnb_btn').hasClass('open')) {
            $(this).removeClass('open');
            $('nav').css({
                'top': '-1000%',
            });
            $('html').removeClass('stop-scrolling');
        } else {
            $(this).addClass('open')
            $('nav').css({
                'top': 0,
            });
            $('html').addClass('stop-scrolling');
        }
    })

    // Header Scroll
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let headerHeight = $('header').height();

        if (scrollPos > headerHeight) {
            $('header').addClass('scrolled')
            if(WindowWidth > 768){
            $('.text_logo').css({'opcaity':'1'});
        }
        } else {
            $('header').removeClass('scrolled');
            $('.text_logo').css({'opcaity':'0'});
        }
    })
})
