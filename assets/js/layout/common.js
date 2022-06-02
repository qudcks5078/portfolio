$(document).ready(function(){
    let descLeng = $('.txt_desc div').length;

    for(let i = 0; i < descLeng; i++){
        $('.txt_desc div').eq(i).delay(i * 500).animate({
            'opacity':'1',
            'top':'0',
        },700)
    }
})