$(".scroll").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;

    $('html, body').animate({ scrollTop: destination }, 300);
    return false;
});