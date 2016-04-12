$(document).ready(function() {
	$('#userInput').submit(function(event) {
		event.preventDefault();
		var something = $('#inputBox').val();
		console.log(something);
		$('.allItems ul').append("<li> <input type='checkbox'>" + something + "<button type='submit'><img src='assets/delete.png'/></button></li>");
	});
	$('ul').on('click', '.trash', function(event){
		$(this).closest('li').remove();
	});
});
