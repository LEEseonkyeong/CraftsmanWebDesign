$(function () {
    // menu
    $(".sub, .sub_bg").hide();

    $(".main>li, .sub_bg").hover(function () {
        $(".sub, .sub_bg").stop().slideDown();
    }, function () {
        $(".sub, .sub_bg").stop().slideUp();
    }) // hover


    // slide_img
    var n = 0; // 0 1 2

    setInterval(function () {
        if (n == 2) {
            n = 0;
        } else {
            n++;
        } // if
        // console.log(n)

        $(".left_move").animate({
            left: n * (-1200) + "px"
        }, 500) // animate
    }, 2500); // setInterval


    // modal pop_up
    $(".p_click").click(function(){
        $(".modal, .pop_up").show();
    }) // p_click click

    $(".close").click(function(){
        $(".modal, .pop_up").hide();
    }) // close click

}) // jQuery