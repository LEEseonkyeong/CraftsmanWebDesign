$(function () {
    // 메뉴
    $(".main li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    }) // hover

    // 슬라이드 탑 이동
    setInterval(function(){
        $(".top_move").animate({top : "-300px"},500, function(){
            $(".top_move").append($(".top_move li").eq(0) );
            $(".top_move").css({top : 0});
        }) // setInterval
    }, 2500)


    // 팝업
    $(".p_click").click(function () {
        $(".modal").show();
        $(".pop").show();
    }) // click

    $(".close").click(function () {
        $(".modal, .pop").hide();
    }) // click

}) // jQuery