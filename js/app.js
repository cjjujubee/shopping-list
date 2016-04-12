$(document).ready(function() {
	$('#userInput').submit(function(event) {
		event.preventDefault();
		var something = $('#inputBox').val();
		$('.allItems ul').append("<li class='currentItem'> <img class='checked' src='assets/check.png'/>" + " " + something + " " + "<button type='submit'><img src='assets/delete.png'/ class='trash'></button></li>");
		$('#userInput')[0].reset();
	});

});
assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.trash', function(event){
		console.log('trash clicked')
		$(this).closest('li').remove();
	});	
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
		console.log('check clicked')
		console.log(event.currentTarget)
	});
}