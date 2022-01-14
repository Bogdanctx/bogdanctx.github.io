$(document).ready(function() {
    $(".elements").animate({
        top: "60%",
        opacity: 1
    }, 1200);
    setTimeout(() => {
        $("#background-img").animate({
            opacity: 1
        }, 1000);
    }, 1300);
});
