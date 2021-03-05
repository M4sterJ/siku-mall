$(function() {
  //性别
  $('.sex input').click(function() {
    if($('.sex input')[0].checked || $('.sex input')[1].checked) {
      $('.sex img').css('opacity','1')
    }
  });
  //生日
  $('.birthday select').change(function() {
    console.log($(this));
    if($('#nian').val() && $('#yue').val() && $('#ri').val()) {
      $('.birthday img').eq(1).css('opacity','0');
      $('.birthday img').eq(0).css('opacity','1');
    }else {
      $('.birthday img').eq(0).css('opacity','0');
      $('.birthday img').eq(1).css('opacity','1');
    }
  });
  //地点
  $('.address select').change(function() {
    console.log($(this));
    if($('#sheng').val() && $('#shi').val() && $('#xian').val()) {
      $('.address img').eq(1).css('opacity','0');
      $('.address img').eq(0).css('opacity','1');
    }else {
      $('.address img').eq(0).css('opacity','0');
      $('.address img').eq(1).css('opacity','1');
    }
  });
  //点击
  var flag = true;
  $('.rUl li').click(function() {
    // console.log($(this).hasOwnProperty('activeLi'));
    if(flag) {
        $(this).addClass('activeLi');
        flag = false;
    }else{
        $(this).removeClass('activeLi');
        flag = true;
    }
  });
  $('.go').click(function() {
    location.assign('../index.html')
  })
});