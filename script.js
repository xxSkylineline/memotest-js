const tablero = document.querySelector('.tablero')
const $casilleros = document.querySelectorAll(".cuadro");
const coloresParaCuadricula = [
  "rojo",
  "amarillo",
  "verde",
  "azul",
  "negro",
  "violeta",
];
let segundo = 1000
let ordenDeColores = [];
let ordenDeJugador = [];

document.querySelector("#iniciador").onclick = function (event) {
  document.querySelector("#iniciador").setAttribute("disabled", "");
  
  
  let esVerdadero = presentarPatronDeColores();
  
  setTimeout(() => {
    turnoJugador()
  },segundo * $casilleros.length+2);
  
  
  
};

function crearNumeroRandom(casilleros) {
  let tamanioDeCasilleros = casilleros.length;
  return Math.floor(Math.random() * tamanioDeCasilleros);
}

function buscarDuplas(color, ordenDeColores) {
  let cantidadRepetida = 0;

  for (let i = 0; i < ordenDeColores.length; i++) {
    if (ordenDeColores[i] == coloresParaCuadricula[color]) {
      cantidadRepetida++;
    }
  }
  return cantidadRepetida;
}

function ingresarColorAVector(posicionDeColor) {
  return ordenDeColores.push(coloresParaCuadricula[posicionDeColor]);
}

function rellenarVectorDeColores() {
  const maximosRepetidos = 1;
  let cantidadRepetida;
  let numeroAleatorio;

  for (i = 0; i < $casilleros.length; ) {
    numeroAleatorio = crearNumeroRandom(coloresParaCuadricula);
    cantidadRepetida = buscarDuplas(numeroAleatorio, ordenDeColores);

    if (cantidadRepetida <= maximosRepetidos) {
      ordenDeColores.push(coloresParaCuadricula[numeroAleatorio]);
      i++;
    }
  }
}

function crearPatronDeCuadriculas() {
  rellenarVectorDeColores();
}

function turnoJugador() {
  console.log("estoy en la funcion");
}

function agregarClaseAElelementoHTML(elemento, clase) {
  elemento.classList.add(clase);
}

function eliminarClaseAElementoHtml(elemento, clase) {
  elemento.classList.remove(clase);
}


function presentarPatronDeColores(){
  
  bloquearJugador()
  crearPatronDeCuadriculas(ordenDeColores);

  $casilleros.forEach((elemento, i) => {
    let segundoParaAgregarClase = segundo * (i+1);
    let segundoParaEliminarClase = segundo * (i+2);

    setTimeout(() => {
      agregarClaseAElelementoHTML($casilleros[i], "transicion");
      agregarClaseAElelementoHTML($casilleros[i], ordenDeColores[i]);
    }, segundoParaAgregarClase);

    setTimeout(() =>{
      eliminarClaseAElementoHtml($casilleros[i], ordenDeColores[i]);
    }, segundoParaEliminarClase);
  });

  return true;
}


}

function bloquearJugador(){

  tablero.addEventListener('click', function(){

  })
}

function verificarPosiciones(primeraPosicion, segundaPosicion){
  let sonIguales;
  
  if(primeraPosicion == segundaPosicion){
    sonIguales = true;
  };

  if(primeraPosicion != segundaPosicion){
    sonIguales = false;
  };

  return sonIguales;
};

function turnoJugador(){

  seleccionarPosicionDeTablero(tablero, $casilleros)

 


 console.log("Llega hasta aca")
}