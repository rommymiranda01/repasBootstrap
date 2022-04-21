$(".groc").click(function () {
    //$(".verd").hide(5000);
    //$(this).siblings('div').slideUp(700);
    $(this).parent().children('div').slideUp(700);
    //$(this).parent().parent().children('div').slideUp(700);
    // $(".verd").slideUp(700, function () {
    //     $('.taronja').slideUp(700);
    // });
})

$(".blau").click(function () {
    //$(".verd").hide(5000);
    $(".verd").slideDown(700, function () {
        $('.groc').slideDown(700, function () {
            $('.taronja').slideDown(700)
        })
    });
})

$(".play").click(function () {
    console.log("Play")
    $(this).parent().siblings('video').get(0).play();
})

$(".pause").click(function () {
    console.log("Pause")
    $(this).parent().siblings('video').get(0).pause();
})

$(".stop").click(function () {
    console.log("Stop")
    $(this).parent().siblings('video').get(0).pause();
    $(this).parent().siblings('video').get(0).currentTime = 0;
})

$(".next").click(function () {
    console.log("Next")
    $(this).parent().siblings('video').get(0).currentTime += 3;
})

$(".previous").click(function () {
    console.log("Previous")
    $(this).parent().siblings('video').get(0).currentTime -= 3;
})

$(".mute").click(function () {
    console.log("Mute")
    $(this).parent().siblings('video').get(0).volume = 0;
})

$(".down").click(function () {
    console.log("Down")
    $(this).parent().siblings('video').get(0).volume -= 0.1;
})

$(".up").click(function () {
    console.log("Up")
    $(this).parent().siblings('video').get(0).volume += 0.1;
})