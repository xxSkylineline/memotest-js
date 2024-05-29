const $casilleros = document.querySelectorAll(".cuadro");
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
  let segundo = 1000;
  crearPatronDeCuadriculas(ordenDeColores);

  $casilleros.forEach((elemento, i) => {
    setTimeout(() => {
      agregarClaseAElelementoHTML($casilleros[i], "transicion");
      agregarClaseAElelementoHTML($casilleros[i], ordenDeColores[i]);
    }, segundo * (i+1));

    setTimeout(() =>{
      eliminarClaseAElementoHtml($casilleros[i], ordenDeColores[i]);
    }, segundo * (i+2) )
  });
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

function agregarClaseDeColorACuadricula(cuadricula, ordenDeColores) {
  for (i = 0; i < cuadricula.length; i++) {
    cuadricula[i].classList.add(ordenDeColores[i]);
  }
}

function cambiaColorABlanco(cuadricula, colores) {
  cuadricula.classList.remove(colores);
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
