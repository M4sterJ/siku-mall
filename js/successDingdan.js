$(function() {
    $('.btns').on('click','div',function() {
        console.log(this);
        $('.btns div').removeClass('active');
        $(this).addClass('active');
        $('.cardList .card').css('display','none');
        $('.cardList .card').eq($(this).index()).css('display','block');
    });
    //点击银行卡分期图片
    $('.fenqiBox').click(function() {
        $('#fenqiInput')[0].checked = true;
        $('.goZhifu1').css('background','#E83C39');

    });
    $('.quxiao').click(function() {
        $('#fenqiInput')[0].checked = false;
        $('.goZhifu1').css('background','#ececec');
    });
    $('.imgBox').click(function() {
        var index = $('.imgBox').index(this);
        $(this).parent().find('.card1')[0].checked = true;
        $('.table1').css('display','none');
        $('.table1').eq(index).css('display','block');
        console.log($(this).index());
    });
    $('.goBack').click(function() {
        location.assign('../index.html')
    })
})
