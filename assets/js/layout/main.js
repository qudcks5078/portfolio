$(document).ready(function(){

    // 비주얼 이미지
    let WindowWidth = $(window).width();
    let WindowInner = $(window).innerHeight();

    // Bottom Anchor
    let limenu = $('.bottom_anchor > ul > li');
    let contents = $('.sticky_section > .content');
    
    limenu.click(function(event){
        // event.preventDefault();
        let idx = $(this).index();
        let tt = contents.eq(idx).offset().top;

        // 해당 위치 이동
        $('html, body').animate({
            scrollTop:tt
        });
    })

    if(WindowWidth > 768){
    $(window).scroll(function(){
        let contents = $('.content');
        let DocHeight = $(this).scrollTop();
        let scrollPos = $(window).scrollTop();
        let Wheight = window.innerHeight;
        let headerHeight = $('header').height();

        contents.each(function(i){
            let tg = $(this);
            let Nexttg = $(this).next();
           
            if(tg.offset().top - 100 < (DocHeight + headerHeight)){
                tg.find('.content_pos').children().addClass('active').find('.inner').removeClass('active');
            }else{
                tg.find('.content_pos').children().removeClass('active').find('.inner').addClass('active');
            }
        })
    })
}
});
