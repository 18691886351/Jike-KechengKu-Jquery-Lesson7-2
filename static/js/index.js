$(document).ready(function() {


    /*展开header中的搜索栏*/
    $("#search-btn").click(function() {
        $("#searchbox").addClass("scale");
    })


    $("#close-btn").click(function() {
        $("#searchbox").removeClass("scale");
    })


    /*header中loginlist的mouseover与mouseout事件*/
    $("#loginlist").mouseover(function() {
        $(this).children(".submenu").show();
    })

    $("#loginlist").mouseout(function() {
        $(this).children(".submenu").hide();
    })

    /*header中appicon的mouseover与mouseout事件*/
    $("#appicon").mouseover(function() {
        $(this).children(".submenu").show();
    })

    $("#appicon").mouseout(function() {
        $(this).children(".submenu").hide();
    })

    /*hader中nav ul li的mouseover与mouseout事件*/
    $(".header-nav > li").mouseover(function() {
        $(this).children(".submenu").addClass("opacity_change");
        //箭头旋转180°
        $(this).children(".arrow-icon").addClass("arrow-rotate");
    })

    $(".header-nav > li").mouseout(function() {
        $(this).children(".submenu").removeClass("opacity_change");
        $(this).children(".arrow-icon").removeClass("arrow-rotate");
    })

    /*right-list中title，每个列表的mouseover与mouseout事件*/
    $(".pager .content .right-list .title .nav .item").mouseover(function() {
        $(this).children(".submenu").show();
    })

    $(".pager .content .right-list .title .nav .item").mouseout(function() {
        $(this).children(".submenu").hide();
    })


    /*.hot-lessionbox ul li .lession-header mouseover与mouseout事件*/
    $(".pager .content .right-list .lession-list li .lession-header .lessionplay-back").mouseover(function(){
        $(this).css({"opacity":"1"});
    })

    $(".pager .content .right-list .lession-list li .lession-header .lessionplay-back").mouseout(function(){
        $(this).css({"opacity":"0"});
    })

    /*
    .hot-lessionbox ul li .lession-info
    鼠标在mouseover其中一个lession时,显示level_info和numberinfo,文字段落向下滑动
    鼠标在mouseout其中一个lession时,隐藏level_info和numberinfo，文字段落向上收起
    */
    $(".lession-list li .lession-info").each(function() {
        $(this).mouseover(function() {
            $(this).children(".timeandlevel").children(".level-info").show();
            $(this).children(".timeandlevel").children(".number-info").show();
            /*if (!$(this).children("p").is(":animated")) {
                $(this).children("p").slideDown();
            }*/
            if ($(this).children("p").is(":animated")) {
                $(this).children("p").stop();
            }
            $(this).children("p").slideDown("fast");
        });
        $(this).mouseout(function() {
            $(this).children(".timeandlevel").children(".level-info").hide();
            $(this).children(".timeandlevel").children(".number-info").hide();
            /* 
            if (!$(this).children("p").is(":animated")) {
                            $(this).children("p").slideUp();
            }*/
            if ($(this).children("p").is(":animated")) {
                $(this).children("p").stop();
            }
            $(this).children("p").slideUp("fast");
        });
    });
})
