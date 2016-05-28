var $logo = $('#logo-scroll');
$(document).scroll(function() {
    $logo.css({display: $(this).scrollTop()>100 ? "block":"none"});
});