$(function() {
    //点击修改
    $('.change').click(function() {
        $('.changeMsg').slideUp();
        $('.change').css('opacity','0');
        setTimeout(function() {
            $('.newAddress').slideDown();
        },500)
    });
    var addObj = {};
    var uAddre;
    //点击确定收货地址
    $('.ok').click(function() {
        console.log($('#newA')[0].checked);
        if($('#newA')[0].checked) {
            if( $('#uSheng').val() && $('#uShi').val() &&  $('#uXian').val() && $('#uName').val() && $('#uPhone').val()) {
                uAddre = $('#uSheng').val() + $('#uShi').val() + $('#uXian').val();
                $('.newAddress').slideUp();      
                $('.change').css('opacity','1');
                $(`
                <div class="userL">
                    <input type="radio" checked name="a" id="useli">
                    <span class="span1">${$('#uName').val()}</span>
                    <span class="span2">${uAddre}</span>
                    <span class="span3">${$('#uPhone').val()}</span>
                    <span class="dell">删除</span>
                </div>
                `).prependTo($('.newAddress'));
                addObj.name = $('#uName').val();
                addObj.phone = $('#uPhone').val();
                addObj.address = uAddre;
                console.log(uAddre);
                setTimeout(function() {
                    $('#showName').html(addObj.name);
                    $('#showPhone').html(addObj.phone);
                    $('#showAddress').html(addObj.address);
                    $('.changeMsg').slideDown();
                    $('#newA')[0].checked = false;
                },500)
                console.log($('#uPhone').val());
                //清空表单数据
                $('.newAdd').css('height','0');
                $('#uName').val('');
                $('#uPhone').val('');
                $('#uAddress').val('');
                $('#uSheng').val('');
                $('#uShi').val('');
                $('#uXian').val('');
                $('#uXiangxi').val('');
                $('#errTips').css('display','none');
            }else {
                $('#errTips').css('display','block');
            }
        }else {
            // console.log($('.newAddress .userL').find('input:checked').parent().find('.span1').html());
            $('#showName').html($('.newAddress .userL').find('input:checked').parent().find('.span1').html());
            $('#showPhone').html($('.newAddress .userL').find('input:checked').parent().find('.span2').html());
            $('#showAddress').html($('.newAddress .userL').find('input:checked').parent().find('.span3').html());
            $('.newAddress').slideUp();
            setTimeout(function() {
                $('.change').css('opacity','1');
                $('.changeMsg').slideDown();
            },500)
        }
    });
    $('#newA').click(function() {
        $('.newAdd').css('height','140px')
    });
    // $('.dell').click(function() {
    //     $(this).parent().remove();
    // });
    $('.newAddress').on('click','.dell',function() {
        $(this).parent().remove();
    })
    $('#useli').click(function() {
        $('#errTips').css('display','none');
    });
    $('.newAddress').on('click','#useli',function() {
        $('.newAdd').css('height','0')
    })
    //返回购物车
    $('.back').click(function() {
        location.assign('./shoppingCart.html')
    });
    //提交订单
    $('.tijiaodingdan').click(function() {
        location.assign('./successDingdan.html')
    });
    //返沪首页
    $('.goBack').click(function() {
        location.assign('../index.html')
    });

})