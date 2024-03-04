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
  let posicionDeColor = crearNumeroRandom(coloresParaCuadricula);
  let cantidadRepetida;
  let maximosRepetidos = 1;

  cantidadRepetida = buscarDuplas(posicionDeColor, ordenDeColores);

  if (
    cantidadRepetida <= maximosRepetidos &&
    ordenDeColores.length <= $casilleros.length
  ) {
    ingresarColorAVector(posicionDeColor);
  }

  if (cantidadRepetida >= maximosRepetidos) {
    posicionDeColor = crearNumeroRandom($casilleros);
  }

  console.log(ordenDeColores);

  return;
}
