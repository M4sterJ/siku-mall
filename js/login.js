$(function () {
  $("#saoma").click(function () {
    $("#saomaBox").css("display", "block");
    $("#mimaBox").css("display", "none");
    $("#saoma").css("color", "#f19108");
    $("#mima").css("color", "#666");
  });
  $("#mima").click(function () {
    $("#saomaBox").css("display", "none");
    $("#mimaBox").css("display", "block");
    $("#mima").css("color", "#f19108");
    $("#saoma").css("color", "#666");
  });
  //获取范围内随机数的方法
  function randomNum(start, end) {
    return parseInt(Math.random() * (end - start + 1) + start);
  }
  // console.log(randomNum(2,5));
  //获取N位数的验证码
  function randomCode(n) {
    var codeStr = "";

    for (var i = 0; i < n; i++) {
      var num = randomNum(1, 3);
      var numStr = randomNum(48, 57);
      var lowEn = randomNum(97, 122);
      var upEn = randomNum(65, 90);
      codeStr +=
        num == 1
          ? String.fromCharCode(numStr)
          : num == 2
          ? String.fromCharCode(lowEn)
          : String.fromCharCode(upEn);
    }
    return codeStr;
  }
  //   console.log(randomCode(6));
  $("#codeBox").html(randomCode(6));
  $("#codeBox").click(function () {
    $("#codeBox").html(randomCode(6));
  });
  // 获取用户信息（用户名）
  $("#userName").blur(function () {
    // console.log("失去焦点");
    $("#userName").css({
        'box-shadow' : "none",
        'border': '1px solid rgb(222, 222, 222)'
    })
    if($('#userName').val()) {
        $('.icon-user1').css('color','rgb(255, 173, 119)');
    }else {
        $('.icon-user1').css('color','#666');
    }
    

  });
  $("#userName").focus(function () {
    // console.log("获取焦点");
    $('#errMsg').css('display','none');
    $("#userName").css({
        'box-shadow' : "0 0 5px rgb(255, 173, 119)",
        'border': '1px solid rgb(255, 173, 119)'
    })
    $('.icon-user1').css('color','rgb(255, 173, 119)');
  });
  // 获取用户密码
  $("#userPassword").blur(function () {
    // console.log("失去焦点");
    $("#userPassword").css({
        'box-shadow' : "none",
        'border': '1px solid rgb(222, 222, 222)'
    })
    if($('#userPassword').val()) {
        $('.icon-suo').css('color','rgb(255, 173, 119)');
    }else {
        $('.icon-suo').css('color','#666');
    }
  });
  $("#userPassword").focus(function () {
    // console.log("获取焦点");
    $('#errMsg').css('display','none');
    $("#userPassword").css({
        'box-shadow' : "0 0 5px rgb(255, 173, 119)",
        'border': '1px solid rgb(255, 173, 119)'
    })
    $('.icon-suo').css('color','rgb(255, 173, 119)');
  });
    //   扫一扫
    $('.saoma1').hover(function(){
        $('.saoma2').css('opacity','1');
        $(this).stop().css({
            'height': '150px',
            'width': '150px',
            'right':'60%'
        })
    },function() {
        $('.saoma2').css('opacity','0');
        $(this).stop().css({
            'height': '192px',
            'width': '192px',
            'right':'20%'

        })
    })
    // 验证码获取焦点
    $("#userCode").blur(function () {
        // console.log("失去焦点");
        $("#userCode").css({
            'box-shadow' : "none",
            'border': '1px solid rgb(222, 222, 222)'
        })
      });
      $("#userCode").focus(function () {
        // console.log("获取焦点");
    $('#errMsg').css('display','none');
        $("#userCode").css({
            'box-shadow': "0 0 5px rgb(255, 173, 119)",
            'border': '1px solid rgb(255, 173, 119)'
        });
      });
    // 登录表单验证
    var userName = 'admin';
    var password = 'admin';
    $('.toLogin').click(function() {
    if ($('#userCode').val().toLowerCase() == $('#codeBox').html().toLowerCase()) {
        if ($('#userName').val() == userName && $('#userPassword').val() == password) {
            $('#errMsg').html('登陆成功，即将跳转到首页');
            isLogin = true;
            $('#errMsg').css({
                'color': 'yellowGreen',
                'display': 'block',
                'border' : '1px solid yellowGreen'
            });
            setTimeout(function() {
              location.assign('../index.html');
            },2000)
        }else {
            $('#errMsg').html('账号或密码错误');
            $('#errMsg').css({
                'color': 'red',
                'display': 'block'
            })
        }
    }else {
        $('#errMsg').html('验证码错误');
        $('#errMsg').css({
            'color': 'red',
            'display': 'block'
        })
    }
    });
    //免费注册
    $('.free').click(function() {
        location.assign('./register.html')
    })
});
