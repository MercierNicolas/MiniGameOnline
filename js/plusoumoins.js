$(document).ready(function(){
	$("#btn").click(function(){
		$("#nb_dit").add("#jeux > p").add("#btn_val").toggle();
		$("#btn").toggle();
		$("#rep").add("#tenta").text("");
		var cible = Math.floor(Math.random() * 1000) + 1;
		var nombre;
		var compteur =0;
		console.log(cible);
		
			$("#btn_val").click(function(){
				nombre = $("#nb_dit").val();
				console.log(nombre);

			 if (nombre == cible){
			 	$("#rep").text("Bravo trouver en :"+ compteur);
			 	$("#nb_dit").add("#jeux > p").add("#btn_val").toggle();
				$("#btn").toggle();	
			 };
			 if(nombre > cible){
        		$("#rep").text("C'est moins");
        		compteur++;	
        		$("#tenta").text(compteur);
        	
   			};
   			if(nombre < cible){
        		$("#rep").text("C'est plus");	
        		compteur++;	
        		$("#tenta").text(compteur);
  			};
			});








	});

});