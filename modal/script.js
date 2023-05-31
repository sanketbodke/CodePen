$(document).ready(function() {
    $('button').click(function() {
        $('.modal_content').css('display', 'block');
    })
    $('.close_btn').click(function() {
        $('.modal_content').css('display', 'none');
    })
});