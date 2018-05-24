var $backToTop = $(".btnToTop");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$('.btnToTop').click(function() {		
	$('html, body').animate({scrollTop: 0}, 300);
})

