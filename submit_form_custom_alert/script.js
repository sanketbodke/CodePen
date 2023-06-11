$("#submit").click(function() {
    $('.alert').css({
        'transform': 'translateX(0)',
    });
});

$(".close").click(function() {
    $('.alert').css({
        'transform': 'translateX(150%)',
    });
});