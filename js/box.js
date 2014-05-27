$(document).ready(function(){
	$(".box").mouseenter(function(){
		$(this).animate({
			height:"+=10px"
		});
	});
	$(".box").mouseleave(function(){
		$(this).animate({
			height:"-=10px"
		});
	});
	$(".box").click(function(){
		$(this).fadeOut(1000);
	});
	$(".pull-here").click(function(){
		$(".panel").slideToggle('slow');
	});
	$( "#button" ).click(function() {
      $( "#effect" ).toggleClass( "newClass", 1000 );
      return false;
    });
});