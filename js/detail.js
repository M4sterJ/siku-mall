$(function() {
    $('.mini1').mouseenter(function() {
        $('.mini1').removeClass('active');
        $(this).addClass('active');
        $('.big1').css('display','none');
        $('.big1').eq($(this).index()).css('display','block');
        $('.big2').css('display','none');
        $('.big2').eq($(this).index()).css('display','block');
    });
    $('.mini1').mouseleave(function() {
        // $('.big2').eq($(this).index()).css('display','none');
        // $('.conBigBox').css('background','none')
    })
    //放大镜
    $('.bigImg').hover(function() {
        $('.comSmallBox').css('display','block');
        $('.comBigBox').css('display','block');
        $('.bigImg').mousemove(function(ev){
            var e = ev || window.event;
            //小框距离左边的距离为鼠标位置减掉小框的一半，减掉大框离左边的距离
            var left = e.pageX -  $('.comSmallBox').width()/2 - $('.bigImg').offset().left;
            var top = e.pageY -  $('.comSmallBox').height()/2 - $('.bigImg').offset().top;
            // console.log(left);
            // console.log(top);
            //left值小于0时小框停止小框移动
            //left值大于大框减去小框宽度时停止小框移动
            if(left <= 0){
                left = 0;
            };
            if(left >= 205){
                left = 205;
            };
            if(top <= 0){
                top = 0
            };
            if(top >= 205){
                top = 205;
            };
            $('.comSmallBox').css({
                left:left,
                top:top
            });
            //小方块的左距离 / 图片的宽度  =  大框的左距离 / 右边图片的宽度
            // var w = left/(205);
            // var h = top/(205);
            $('.comBigBox').find('img').css({
                left:-left * 810 /405 ,
                top:-top * 810 /405 ,
            })
        })
    },function() {
        $('.comSmallBox').css('display','none');
        $('.comBigBox').css('display','none');
    });
    //计算价格
    $('.del').click(function() {
        var money = Number($('#countInput').val());
        if(money == 1) {
            $('.del').click = 'null';
            $('.del').css('cursor','not-allowed');
            return;
        }
        money--;
        $('#countInput').val(money);
        $('#proMoney').html(489 * money);
    })
    $('.add').click(function() {
        var money = Number($('#countInput').val());
        money++;
        $('#countInput').val(money);
        $('.del').css('cursor','pointer');
        $('#proMoney').html(489 * money);
    })
    //小图片点击切换
    $('.selectImg1').click(function() {
        
        $('.big1').css('display','none');
        $('.big1').eq(0).css('display','block');
        $('.big2').css('display','none');
        $('.big2').eq(0).css('display','block');
        $('.selectImg1').css('border','2px solid #806ab4');
        $('.selectImg2').css('border','none');
    })
    $('.selectImg2').click(function() {
        
        $('.big1').css('display','none');
        $('.big1').eq(5).css('display','block');
        $('.big2').css('display','none');
        $('.big2').eq(5).css('display','block');
        $('.selectImg2').css('border','2px solid #806ab4');
        $('.selectImg1').css('border','none');
    });
    //allBuy 
    $('.allList').hover(function() {
        // console.log(this);
        $('.buyImg').eq($(this).index() - 1).find('img').css({
            top: '0px',
            left: '-10px',
            width: '80px',
            height: '80px'
        })
    },function() {
        $('.buyImg').eq($(this).index() - 1).find('img').css({
            top: '20px',
            left: '0',
            width: '50px',
            height: '50px'
        })
    })
    $('.allList1').hover(function() {
        console.log(this);
        $('.buyImg1').eq($(this).index() - 1).find('img').css({
            top: '0px',
            left: '-10px',
            width: '80px',
            height: '80px'
        })
    },function() {
        $('.buyImg1').eq($(this).index() - 1).find('img').css({
            top: '20px',
            left: '0',
            width: '50px',
            height: '50px'
        })
    })
    $('.bbtn').click(function() {
        $('.bbtn').removeClass('activeBtn');
        $(this).addClass('activeBtn');
        $('.page').css('display','none');
        $('.page').eq($(this).index()).css('display','block');
    })
    $('.bbtn1').click(function() {
        $('.bbtn1').removeClass('activeBtn');
        $(this).addClass('activeBtn');
        $('.page1').css('display','none');
        $('.page1').eq($(this).index()).css('display','block');
    });
    $('.message').hover(function(){
        $('.message img').css('display','none');
        $('.message span').css('display','block');
    },function(){
        $('.message img').css('display','block');
        $('.message span').css('display','none');
    });
    $(".goTop").hide();
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
      $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
          $(".goTop").fadeIn(200);
          $('.code').fadeIn(200);
        } else {
          $(".goTop").fadeOut(200);
          $('.code').fadeOut(200);
        }
      });   
    $('.goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
          },500);
    });
    //跳转首页
    $('.shouye').click(function () { 
        location.assign('../index.html')
     });
     //加入购物车、
     $('.goCart').click(function () { 
         $('.mote').css('top','0')
      });
      $('.continue').click(function () { 
        $('.mote').css('top','1080px');
       });
       $('.incar').click(function () { 
        $('.mote').css('top','1080px');
        location.assign('./shoppingCart.html')
       });
       $('.underBottom p').click(function () { 
           location.assign('./lists.html');
        });
        $(".login").click(function () {
            location.assign("./login.html");
        });
        $(".register").click(function () {
            location.assign("./register.html");
        });
        $('.sicon').click(function () { 
            location.assign('./shoppingCart.html')
         });
})