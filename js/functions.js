'use strict';
document.addEventListener('DOMContentLoaded', function(){
	//Array de letras
	var abc = ['abcdefghijklmnñopqrstuvwxyz', 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'];
	var lower_abc = abc[0].split('');
	var upper_abc = abc[1].split('');

	//FUNCIONES PARA LAS SOLUCIONES;
	function askWordAndPos(){
		var palpos = ['', ''];
		while(palpos[0].trim().length == 0 || (palpos[1].trim().length == 0 || isNaN(palpos[1]))){
			palpos[0] = prompt('Inserta una palabra','tu palabra aquí');
			palpos[1] = prompt('Inserta un número. Sólo valores numéricos.','La posición aquí');
		}
		return palpos;
	}

	function askWord(){
		var pal = '';
		while( palpos[0].trim().length == 0 ){
			pal = prompt('Inserta una palabra','Tu palabra aquí');
		}
		return pal;
	}



});