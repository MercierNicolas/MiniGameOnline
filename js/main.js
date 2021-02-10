$(document).ready(function(){

	$("#morpion").mouseover(function(){
		$("#regles").toggle();
	});

	$("#morpion").mouseout(function(){
		$("#regles").toggle();
	});

	$("#casse").mouseover(function(){
		$("#regles").toggle().append("<p>Les règles du jeu : <br/> • Le joueur déplace la raquette de droite à gauche pour empêcher la balle de tomber dans la zone en dessous <br/> • A chaque fois que la balle touche une brique, elle disparaît et le score augmente de 1 point</p>");
	});

	$("#casse").mouseout(function(){
		$("#regles").toggle().empty();
	});
	
	$("#plus_moins").mouseover(function(){
		$("#regles").toggle().append("<p>Les règles du jeu : <br/> • Le joueur doit trouver en le moins d'essaye possible le nombre générer <br/> • A chaque fois que le joueur ce trompe son score augmente de 1,le but est d'avoir le score le plus faible.</p>");
	});

	$("#plus_moins").mouseout(function(){
		$("#regles").toggle().empty();
	});

	$("#puissance4").mouseover(function(){
		$("#regles").toggle();
	});

	$("#puissance4").mouseout(function(){
		$("#regles").toggle();
	});









});