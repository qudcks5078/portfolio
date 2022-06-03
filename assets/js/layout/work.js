$(document).ready(function(){

    $(window).scroll(function(){
    let scrollPos = $(window).scrollTop();
    let transDiv = $('.work_box');

    transDiv.each(function(index){
        if (scrollPos >= ($(this).offset().top / 2 - 200)) {
            $(this).css({
                'transform': 'rotateX(0deg)',
                'transform': 'translate(0px, 0px)',
                'transition-delay': index * 0.1 + 's',
                'opacity': '1',
            })
        }
    })
})
})