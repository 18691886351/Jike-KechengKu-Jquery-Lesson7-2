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
})
