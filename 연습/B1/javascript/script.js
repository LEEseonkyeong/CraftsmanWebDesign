$(function(){
    // 메뉴
    $(".main > li").mouseover(function(){
        $(".sub").stop().slideDown();
    })

    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })

    // 슬라이드이미지
    var n = 0;

    var count = $(".left_move li").length - 1;
    console.log(count);

    setInterval(function(){
        if(n == count) {
            n = 0;
        } else{
            n++;
        } // if
        console.log("n : ", n);

        var pos = n * (-1200) + "px";
        $(".left_move").animate({left : pos}, 500);
    }, 3000)

    setInterval(function(){
        $(".left_move").animate({left : "-1200px"},500,function(){
            $(".left_move").append( $(".left_move li").ep(0) );
            $(".left_move").css({left : "0"});
        }) //
    }) //

    // 탭
    $(".cont1 h2").click(function(){
        $(".cont1 h2").removeClass("on");
        $(this).addClass("on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"});
    })//click

    // 팝업
    

}) // jQuery