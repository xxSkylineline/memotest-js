const $casilleros = document.querySelectorAll(".tabla");
const coloresParaCuadricula = [
  "rojo",
  "amarillo",
  "verde",
  "azul",
  "negro",
  "violeta",
];

document.querySelector("#iniciador").onclick = function (event) {
  let ordenDeColores = [];

  crearPatronDeCuadriculas(ordenDeColores);
};

function crearNumeroRandom(casilleros) {
  let tamanioDeCasilleros = casilleros.length;
  return Math.floor(Math.random() * tamanioDeCasilleros);
}

function buscarDuplas(color, ordenDeColores) {
  let cantidadRepetida = 0;

  for (let i = 0; i < ordenDeColores.length; i++) {
    if (ordenDeColores[i] == color) {
    if (ordenDeColores[i] == coloresParaCuadricula[color]) {
      cantidadRepetida++;
    }
  }
  return cantidadRepetida;
}



function crearPatronDeCuadriculas(ordenDeColores) {
  let posicionDeColor = crearNumeroRandom($casilleros);
  let cantidadRepetida = 0;
  
  cantidadRepetida = buscarDuplas(posicionDeColor, ordenDeColores);

  return 
}
