$(document).ready(function() {
	$("#arrow").click(function() {
		$('html, body').animate({
      scrollTop: $("#content").offset().top
    }, 1000);
	});
});

function hideSubscribeBar() {
	$("#x").slideUp(300);
	$("#subscribe").slideUp(300);
}
