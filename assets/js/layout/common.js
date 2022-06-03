$(document).ready(function(){
    let descLeng = $('.txt_desc div').length;

    for(let i = 0; i < descLeng; i++){
        $('.txt_desc div').eq(i).delay(i * 500).animate({
            'opacity':'1',
            'top':'0',
        },700)
    }

    let file = $('.file_box > input');
    let result = $('.result');
    file.each(function () {
        $(this).on('change', function (index) {
            let fileVal = $(this).val().split("\\");
            let fileIndex = $('.add_file').index(this);

            console.log(result.eq(2));

            if (fileVal.length > 0) {
                let fileName = fileVal[fileVal.length - 1]; //파일명
                if (fileName.length > 0) {
                    result.eq(fileIndex).show();
                    result.eq(fileIndex).html('<div><a class="material-icons">attachment</a><span>' +
                        fileName +
                        '</span><button type="button" class="file_del material-icons">close</button></div>'
                        );
                } else {
                    result.eq(fileIndex).hide();
                    result.eq(fileIndex).html('');
                }
            }
        });
    })

    $(document).on('click', '.file_del' ,function(){
        $(this).parent().remove();
    })
})