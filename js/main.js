'use strict';
document.addEventListener('DOMContentLoaded', function(){

	//Array de letras
	var l_abc = 'abcdefghijklmnñopqrstuvwxyz0123456789 ';
	var u_abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789 ';
	var lower_abc = l_abc.split('');
	var upper_abc = u_abc.split('');

	/***********************************************************************************************************/
	//MUESTRA EL ENUNCIADO CUANDO SE PULSA EL BOTÓN;
	document.querySelector('.wrapper > button').addEventListener('click', mostrarEnunciado, false);
	function mostrarEnunciado(){
		var enunciado = document.querySelector('.enunciado');
		enunciado.style.display = 'block';
		enunciado.classList.add('aparece');
	}

	/***********************************************************************************************************/

	//SWITCH PARA CADA UNO DE LOS BOTONES DEL ENUNCIADO
	var solutions = document.querySelectorAll('button[class^=sol-]');
	solutions.forEach(function(element) {
		element.addEventListener('click', function(){
			switch (element.classList[0]){
				case 'sol-char'     : console.log('charAt'); alert(fcharAt(askWordAndPos())); break;
				case 'sol-lower'    : console.log('toLowerCase'); fLower(); break;
				case 'sol-upper'    : console.log('toUpperCase'); fUpper(askWord()); break;
				case 'sol-indexof'  : console.log('indexOf'); findexOf(askWordWordPos()); break;
				case 'sol-substring': console.log('substring'); fsubstring(askWordPosPos()); break;
				default: break;
			}
		}, true);
	});


	/***********************************************************************************************************/
	//Pide los datos para calcular el CHARAT;
	function askWordAndPos(){
		var palpos = ['', ''];

		//pide datos por teclado y los acumula en el array palpos = palabra y posición;
		while(palpos[0].trim().length == 0 || (palpos[1].trim().length == 0 || isNaN(palpos[1]))){
			palpos[0] = prompt('Escribe un texto','escribe tu texto');
			palpos[1] = prompt('Escribe la posición. Sólo valores numéricos.','La posición aqui');
		}
		console.log(palpos);
		return palpos;
	}
	//SOLUCIÓN chartAt() --> ya es reutilizable;
	function fcharAt(mArray){
		//equivale a la foto que me mandaste por whatsapp letra[pos] pero uso un array en vez de 2 strings;
		return mArray[0][mArray[1]];
	}

	/***********************************************************************************************************/

	//Pide los datos para calcular el LOWERCASE Y EL UPPERCASE;
	function askWord(){
		var pal = '';

		//pide un string por teclado;
		while( pal.trim().length == 0 ){
			pal = prompt('Inserta una palabra','escribe tu palabra');
		}
		return pal; //devuelve un string;
	}

	//SOLUCIÓN toLowercase() --> ya sería reutilizable. ES MUY SENCILLO TENIENDO EL UPPERCASE();
	function fLower(str){ alert('Hay que hacer el LowerCase'); }

	//SOLUCIÓN toUpperCase() --> ya es reutilizable;
	function fUpper(str){
		//recibe los datos insertados por teclado de la función askWord() que devuelve un string;
		var aux = []; //array vacío para acumular letras;
		var str_clone = '';
		//Primer for : se recorre la palabra y cada letra se acumula en la posición 0,1,2... del array aux;
		//Segundo for : se recorre el string de letras en minúsculas 'abcde...0123456 ' --> pongo un espacio al final para que respete los espacios;
		//Si las letras de la palabra (posciones del array aux) que meto coinciden con alguna letra del array lower_abc, el string str_clone acumula las letras del array de mayúsculas;
		//Devuelvo la misma palabra en mayúsculas;
		for(var i = 0; i < str.length; i++){
			aux[i] = fcharAt([str, i]);
			for(var j = 0; j < lower_abc.length; j++){
				if(aux[i] == lower_abc[j]){
					str_clone += fcharAt([u_abc, j]);
				}
			}
		}
		alert(str_clone);
		return str_clone;
	}

	/***********************************************************************************************************/
	//Pide los datos para calcular el INDEXOF
	function askWordWordPos(){
		//PASO 1 :: se piden los datos de cadena, cadena y posición y se acumulan en un array;
		var awwp = ['','',0];

		while( awwp[0].trim().length == 0){ awwp[0] = prompt('Inserta cadena inicial','escribe aqui tu cadena'); }
		while( awwp[1].trim().length == 0){ awwp[1] = prompt('Inserta cadena a buscar','escribe aqui tu cadena'); }
		
		//PASO 2 :: valor opcional del argumento 'pos', por defecto busca desde la posición 0;
		awwp[2] = prompt('Posición desde la que buscar.\nPuedes dejarlo en blanco y la posición a buscar será 0 ', awwp[2]);
		if(isNaN(awwp[2]) || awwp[2] < 0 || awwp[2].trim() == ''){
			awwp[0] = 0;
		}

		//devuelve el array que contiene ['string original', 'string a buscar', 'posición desde la que empieza a buscar'];
		return awwp;
	}

	//SOLUCIÓN indexOf() --> ya es reutilizable;
	function findexOf(values){
		//Recorre el 'string a buscar' letra por letra y lo compara con el 'string original' desde el parámetro 3 (values[2]);
		var fallos = 0;
		for(var i = 0; i < values[1].length; i++){
			if(fcharAt([values[0], i + parseInt(values[2])]) != fcharAt([values[1],i])){
				fallos+=1 				
			}
		}

		//Si hay fallo, no hay concidencia en la búsqueda;
		if(fallos === 0){
			alert(values[2]);
		}else{
			alert('-1');
		}
	}

	/***********************************************************************************************************/

	//Pide los datos para calcular el SUBSTRING
	function askWordPosPos(){
		var awpp = ['',0,0];
		while( awpp[0].trim().length == 0){ awpp[0] = prompt('Inserta cadena inicial.','escribe aqui tu cadena'); }
		
		awpp[1] = prompt('Posición inicial', awpp[1]);
		if(isNaN(awpp[1]) || awpp[1] < 0){
			awpp[0] = 0;
			alert('La posición INICIAL es ' + awpp[0]);
		}
		if(awpp[1] >= awpp[0].trim().length ){ 
			alert('-1'); return; 
		}

		awpp[2] = prompt('Posición final.\nEscribe "-1" si no quieres añadir la posición final.', awpp[0].trim().length);
		if(isNaN(awpp[2]) || awpp[2] < 0 || awpp[2] > awpp[0].length){
			awpp[2] = awpp[0].trim().length;
			alert('La posición FINAL es ' + awpp[0].trim().length);
		}
		return awpp;
	}

	//SOLUCIÓN substring() --> ya es reutilizable;
	function fsubstring(values){
		var palabro = values[0];
		var aux = '';
		for(var i = values[1]; i < values[2]; i++){
			aux += fcharAt([values[0], i]);
		}
		alert('CADENA CORTADA :: ' + aux);
		return aux;
	}

}, true);