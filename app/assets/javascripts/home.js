$(function () {

    console.log( "ready!" );


    (function () {
        var $header = $(".header");
        $(".hamburger").on("click", function(e) {

            // e.preventDefault(); seriously DO NOT uncomment this line dude...why is it here then? good question... :(

            $(this).toggleClass("is-active");
            $header.toggleClass("menu-opened");
            $(".n-stick").toggle("slow", function () {

            });

            $("html").toggleClass("no-overflow");
            //Prevent finger scrolling
            $("html").on("touchmove", function (e) {
                if($("html").hasClass("no-overflow")){
                    e.preventDefault()
                }
            });
        });
    }());
});
