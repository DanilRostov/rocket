$("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;

    $('html, body').animate({ scrollTop: destination }, 600);
    console.log(2);
    return false;
});