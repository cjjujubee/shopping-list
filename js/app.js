/*Goal: After a user types in an item & hits enter, the item should be appended to the list

1. Capture the input and store it somewhere


2. Append that input into a new list item

when user presses enter, console should log "Test"
*/


$(document).ready(function() {
	$('#userInput').submit(function(event) {
		event.preventDefault();
	var something = $('#newItem').val();
		console.log(something);
	});

});