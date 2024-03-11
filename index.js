const $casilleros = document.querySelectorAll(".tabla");
const coloresParaCuadricula = [
  "rojo",
  "amarillo",
  "verde",
  "azul",
  "negro",
  "violeta",
];

let ordenDeColores = [];
let ordenDeJugador = [];

document.querySelector("#iniciador").onclick = function (event) {
  crearPatronDeCuadriculas(ordenDeColores);
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

function crearPatronDeCuadriculas(ordenDeColores) {
  
  rellenarVectorDeColores()

  agregarClaseDeColorACuadricula($casilleros, ordenDeColores);
  turnoJugador()
  
}

function rellenarVectorDeColores() {
  const maximosRepetidos = 1;
  let cantidadRepetida;
  let numeroAleatorio;

  

  for(i = 0; i<$casilleros.length;){
    numeroAleatorio = crearNumeroRandom(coloresParaCuadricula)
    cantidadRepetida = buscarDuplas(numeroAleatorio, ordenDeColores)

    if(cantidadRepetida <= maximosRepetidos){
      ordenDeColores.push(coloresParaCuadricula[numeroAleatorio])
      i++
    }
  }

}

function agregarClaseDeColorACuadricula(cuadricula, ordenDeColores) {
  for (i = 0; i < cuadricula.length; i++) {
    cuadricula[i].classList.add(ordenDeColores[i]);
  }
}

  return;
}
