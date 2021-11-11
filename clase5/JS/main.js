console.log('Hello world!');
//seleccionando por etiqueta

//document.getElementsByTagName('h1')[1]

//seleccionando por clase
//document.getElementsByClassName('animals')[1]

//seleccionando por ID
//document.getElementById('animals')

function cambiarTexto(){
    document.getElementById("gato").innerHTML = "Nya"; 
}

function cambiarTexto2(){
    document.getElementById("gato").innerHTML = "Gato"; 
}

/* mañana hacer el pop up */

function abrirPop(){
    document.getElementById('padrexd').style.display = "block";
}

function cerrarPop(){
    document.getElementById('padrexd').style.display = "none";
}

