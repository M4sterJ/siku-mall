$(function() {
    //用get(0)的方法将jQuery对象转为原生js对象
    var video = $('#vid').get(0);
    $('#videoB').click(function () { 
        console.log(111);
        $('#box').css('background','black');
        $('#vid').css('display','block');
        $('#videoB').css('display','none');
        video.play();
    });
    $('.login').click(function() {
        location.assign('./html/login.html')
    });
    $('.register').click(function() {
        location.assign('./html/register.html')
    })
    //商品列表 页跳转
    // $('.navTips').click(function() {
    //     location.assign('./html/lists.html');
    //     console.log(1111);
    // })
    //点击logo刷新首页
    $('.logo').click(function() {
        location.reload();
    });
    // 页面跳转
    $('.sicon').click(function() {
        location.assign('./html/shoppingCart.html');
    });
    $('.leftContainer').click(function() {
        location.assign('../siku/html/baida.html');
    })
    $('.rightTop').click(function() {
        location.assign('../siku/html/guoji.html');
    });
    $('.modela').click(function() {
        location.assign('../siku/html/zhuliren.html')
    });
    var show = true;
    $('.sSearch').on('click',function() {
        if(show) {
            $('.searchInput').css('width','200px');
            show = false;
        }else{
            $('.searchInput').css('width','0px');
            show = true
        }
    })
})