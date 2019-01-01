function cargarDatos() {
	alert('HOLA');
	var imagenes = ['besito.png', 'em.png', 'guino.jpeg', 'lengua.png', 'pensando.png', 'sorprendido.jpg', 'besito.png', 'em.png', 'guino.jpeg', 'lengua.png', 'pensando.png', 'sorprendido.jpg'];
	imagenes = imagenes.sort(function() {return Math.random() - 0.5});
	imagenuno.setAttribute('src', imagenes[0]);
	imagendos.setAttribute('src', imagenes[1]);
	imagentres.setAttribute('src', imagenes[2]);
	imagencuatro.setAttribute('src', imagenes[3]);
	imagencinco.setAttribute('src', imagenes[4]);
	imagenseis.setAttribute('src', imagenes[5]);
	imagensiete.setAttribute('src', imagenes[6]);
	imagenocho.setAttribute('src', imagenes[7]);
	imagennueve.setAttribute('src', imagenes[8]);
	imagendiez.setAttribute('src', imagenes[9]);
	imagenonce.setAttribute('src', imagenes[10]);
	imagendoce.setAttribute('src', imagenes[11]);
}


var yaHaySeleccionado = false;
var yaSeleccionado;


function seleccionar(x) {
	if (x.style.transform != 'rotateY(180deg)') {
		//Muestro la imagen de la tarjeta seleccionada
		x.style.transform = 'rotateY(180deg)';
		//Pregunto si ya hay un elemento seleccionado
		if (yaHaySeleccionado) {
			//Si lo hay, lo comparo con el que tengo seleccionado ahora mismo
			if (x.querySelector('img').src == yaSeleccionado.querySelector('img').src) {
				seleccionCorrecta(x, yaSeleccionado);
			} else {
				seleccionIncorrecta(x, yaSeleccionado);
			}
			yaHaySeleccionado = false;
		} else {
			yaSeleccionado = x;
			yaHaySeleccionado = true;
		}
	}
}


function seleccionCorrecta(x, yaSeleccionado) {
	alert('Bien!!');
}

function seleccionIncorrecta(x, yaSeleccionado) {
	alert(':(');
	yaSeleccionado.style.transform = 'rotateY(0deg)';
	x.style.transform = 'rotateY(0deg)';
}