$('#buttonstap2').click(function() {
	$('#stap2').removeClass('hide');

	var numberOfPersons = $('#personenID').val();
	var total = 135 + numberOfPersons * 90;

	$('#total').text(total);
});

$('#buttonstap3').click(function() {
	$('#stap3').removeClass('hide');

	var outcomeTitle;
	var outcomeText;

	if ($('#customRadioInline1').prop('checked') === true) {
		outcomeTitle = 'Helaas, u komt niet in aanmerking voor een voedselpakket van de voedselbank';
		outcomeText = 'Twijfelt u aan deze uitslag, dan kunt u contact opnemen met een van onze externe instanties.';
	} else if ($('#customRadioInline2').prop('checked') === true) {
		outcomeTitle = 'U komt in aanmerking voor een voedselpakket van de voedselbank!';
		outcomeText = 'Afhankelijk van uw situatie kunt u contact zoeken met een externe instanties om de aanmelding te voltooien.';
	}

	$('#outcomeTitle').text(outcomeTitle);
	$('#outcomeText').text(outcomeText);
});

$(document).ready(function() {
	$('[data-toggle="popover"]').popover();
});
