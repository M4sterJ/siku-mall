$(function () {
    // input 框js样式
    $(".register input").blur(function () {
        // console.log("失去焦点");
        $(this).css({
            "box-shadow": "none",
            border: "1px solid rgb(222, 222, 222)",
        });
    });
    $(".register input").focus(function () {
        // console.log("获取焦点");
        $(this).css({
            "box-shadow": "0 0 5px rgb(255, 173, 119)",
            border: "1px solid rgb(255, 173, 119)",
        });
    });
    var str = /^1[3|4|5|7|8][0-9]{9}$/;
    var str2 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    var str3 = /\w{6,25}/;
    $('#userNameInput').blur(function() {
        
        var flag = str.test($('#userNameInput').val());
        var flag1 = str2.test($('#userNameInput').val());
        // console.log(flag1);
        if($('#userNameInput').val() != '' && flag || flag1) {
            $('#nameTips').html('账号可以使用');
            $('#nameTips').css('color','yellowGreen')
        }else {
            $('#nameTips').html('请输入正确的手机号或邮箱');
            $('#nameTips').css('color','red')
        }
    })
    $('#passwordInput').blur(function() {
        var flag2 = str3.test($('#passwordInput').val());
        // console.log(flag2);
        if($('#passwordInput').val() != '') {
            if(flag2){
                $('#passwordTips').html('密码符合格式！');
                $('#passwordTips').css('color','yellowGreen')
            }else {
                $('#passwordTips').html('密码的长度只能在6-25位之间！');
                $('#passwordTips').css('color','red');
            }
        }else {
            $('#passwordTips').html('请输入密码');
            $('#passwordTips').css('color','red');
        }
    })
    $('#confirmInput').blur(function() {
        if($('#confirmInput').val() == '') {
            $('#confirmTips').html('请再次确认密码');
            $('#confirmTips').css('color','red')
        }else {
            if($('#passwordInput').val() != $('#confirmInput').val()){
                $('#confirmTips').html('两次输入的密码不一致');
                $('#confirmTips').css('color','red');
            }else {
                $('#confirmTips').html('两次输入的密码一致！');
                $('#confirmTips').css('color','yellowGreen')
            }
        }
    });
    $('.free').click(function() {
        location.assign('./login.html')
    });
    $('.toLogin').click(function() {
        console.log($('#rememberUserLoginInfo').is(':checked') == true);
        if($('#rememberUserLoginInfo').is(':checked') == true) {
            if($('#userNameInput').val() == '' || $('#passwordInput').val() == '' || $('#confirmInput').val() == '') {
                alert('请输入正确的用户名密码')
            }else {
                location.assign('./successRegister.html')
            }
            
        }else {
            alert('请阅读并同意 《用户注册协议》 《隐私政策》《平台服务协议》 《消费者告知书》');
        }
    })
});