$(function(){

	// controller dialog box
	$( "#control-box").dialog({
		closeText: ' ',
		minWidth: 500
	});

	// controller menu accordion
	$( "#control-box" ).accordion({
		animate: 500,
		collapsible: true,
		icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});


	// wave-y range attributes max and value set 
	$('#wave-y').attr('max', canvas.height * 2);
	$('#wave-y').val(canvas.height / 2);


	// add event for range
	$('.custom-range').on('input', function(event){
		$target = $(event.target).attr('id');

		// range input value set to wave object
		if($target === 'wave-y') {
			wave.y = this.value;
		} else if($target === 'length') {
			wave.length = this.value;
		} else if($target === 'amplitude') {
			wave.amplitude = this.value;
		} else if($target === 'frequency') {
			wave.frequency = this.value;
		}
		
		// range input value set to strokeColor object
		if($target === 'hue') {
			strokeColor.h = this.value;
		} else if($target === 'start') {
			strokeColor.s = this.value;
		} else if($target === 'end') {
			strokeColor.l = this.value;
		}

		// range input value set to bgColor object
		if($target === 'red') {
			bgColor.r = this.value;
		} else if($target === 'green') {
			bgColor.g = this.value;
		} else if($target === 'blue') {
			bgColor.b = this.value;
		} else if($target === 'alpha') {
			bgColor.a = this.value;
		}

	});

});