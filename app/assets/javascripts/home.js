$(function () {

    console.log( "ready!" );


    (function () {
        var $header = $(".header");
        $(".hamburger").on("click", function() {

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
