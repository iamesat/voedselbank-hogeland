$('#buttonstap2').click(function() {
	$('#stap2').removeClass('hide');

	var numberOfPersons = $('#personenID').val();
	var total = 135 + numberOfPersons * 90;

	$('#total').text(total);
});

$('#buttonstap3').click(function() {
	$('#stap3').removeClass('hide');
});

$(document).ready(function() {
	$('[data-toggle="popover"]').popover();
});
