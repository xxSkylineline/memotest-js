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
  return Math.floor(Math.random() * casilleros.length);
}

function buscarDuplas(color, ordenDeColores) {
  let cantidadRepetida = 0;

  for (let i = 0; i < ordenDeColores.length; i++) {
    if (ordenDeColores[i] == color) {
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
