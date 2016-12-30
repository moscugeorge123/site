$(document).ready(function () {
	generate();

	player = 'B3';

	var activeCell = {
		elem : undefined,
		class : undefined,
		id : undefined
	};


	$('.player').click(function () {
		clasa = $(this).attr('class');

		if(clasa.split(' ')[1] == player) {
			activeCell.elem = $(this);
			activeCell.class = $(this).attr('class');
			activeCell.id = $(this).attr('id');
		}
	});

	$('.path-cell').click(function(){
		if(activeCell.elem){
			elem = activeCell.elem;
			elem.stop().fadeOut(250);
			$(this).append(elem[0]);
			elem.stop().fadeIn(250);
			$('.'+activeCell.class+' #'+activeCell.id).remove();
		}
	});
});