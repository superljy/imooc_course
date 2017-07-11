$(document).ready(function(){
    // var windowHeight = $(window).height();
    // $("section").height((windowHeight - 60) + "px");
    // weibo
    $(".weibo").on("mouseover",function(){
        $(".weibo").attr("src","img/weibo.png");
    });

    $(".weibo").on("mouseout",function(){
        $(".weibo").attr("src","img/weibo-d.png");
    });
    // weixin
    $(".weixin").on("mouseover",function(){
        $(".weixin").attr("src","img/weixin.png");
    });

    $(".weixin").on("mouseout",function(){
        $(".weixin").attr("src","img/weixin-d.png");
    });
    // mail
    $(".mail").on("mouseover",function(){
        $(".mail").attr("src","img/mail.png");
    });

    $(".mail").on("mouseout",function(){
        $(".mail").attr("src","img/mail-d.png");
    });
});

