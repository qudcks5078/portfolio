$(document).ready(function(){
    let WindowWidth = $(window).width();
    let WindowInner = $(window).innerHeight();

    $(window).resize(function(){
		if(WindowWidth > 1024 ){
			let isWeb = true;
			let isMobile = false;
			$(window).resize(ResizePc);
			ResizePc();
		}else{ 
			let isWeb = false;
			let isMobile = true;
			$(window).resize(ResizeM);
			ResizeM();
		}
	});
    $(window).resize();

    // 메인 비주얼
    // 모바일 일 시 이미지 하단 이동
    function ResizePc(){
        $('.right_img').css('padding-top','0');
    }
    function ResizeM(){
        $('.right_img').css('padding-top',WindowInner/2);
    }




    if(WindowWidth > 1024){
    $(window).scroll(function(){
        var contents = $('.content');
        var DocHeight = $(this).scrollTop();
        var scrollPos = $(window).scrollTop();
        var Wheight = window.innerHeight;

        contents.each(function(i){
            let tg = $(this);
            let Nexttg = $(this).next();
           
            if(tg.offset().top < DocHeight){
                tg.find('.content_pos').children().addClass('active').find('.inner').removeClass('active');
            }else{
                tg.find('.content_pos').children().removeClass('active').find('.inner').addClass('active');
            }
        })
    })
}
})
