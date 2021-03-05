$(function () {
    //跳首页
    $(".shouye").click(function () {
        location.assign("../index.html");
    });
    $(".underBottom p").click(function () {
        location.assign("./lists.html");
    });
    $(".login").click(function () {
        location.assign("./login.html");
    });
    $(".register").click(function () {
        location.assign("./register.html");
    });
    $('.sicon').click(function () { 
        location.assign('./shoppingCart.html')
     })
});