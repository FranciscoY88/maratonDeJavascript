/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. 
Si te trabas con alguno, podes continuar con otro de forma independiente. 
Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. 
Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/
  alert("Bievenidas/os al Maratón Guayerd");
/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre.
 Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector("body"); //Se rompe lindo, no?
ej2Nombre.addEventListener("focus", focusHandler);

function focusHandler(_e){
  ej2Nombre.innerText = "El input nombre tiene el foco";
}

function blurHandler(_e){
  ej2Resultado.innerText = "";
  
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");
const fragmento = new DocumentFragment();
const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();

function mostrarSaludo(){
  ej3Div.innerText = txtSaludo;
}
mostrarSaludo(txtSaludo);

/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/
  let ejercicio4Mail = document.querySelector(".ej4-email");
  let ejercicio4Mensaje = document.querySelector(".ej4-mensaje");
  let ejercicio4 = document.querySelector(".ej4-enviar");
  let ejercicio4Resultado = document.querySelector(".ej4-resultado");
  const fragmentar = new DocumentFragment();

  ejercicio4.addEventListener("click", unaMuestra);

  function unaMuestra(a){
    a = document.createElement("div");
    a.innerText = `${ejercicio4Mail.value} ${ejercicio4Mensaje.value}`;
    fragmentar.appendChild(a);
    ejercicio4Resultado.appendChild(fragmentar);
  }


/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/
let ej5 = document.querySelector(".ej5")
ej5.innerHTML = `<h2>Ejercicio 5</h2>
                     <div class="ej5-resultado"></div>
                     <div>Vale por unos inputs... ver la consigna</div>
                     <div>
                      <form action="">
                        <input type="text" class="ej5-1" placeholder="Ingrese número" pattern="[0-9]\d">
                        <input type="text" class="ej5-2" placeholder="Ingrese otro número" pattern="[0-9]\d">
                        <button class="ej5-enviar">Sumar</button>
                      </form>
                     </div>`;
let ej5_1 = document.querySelector(".ej5-1");
let ej5_2 = document.querySelector(".ej5-2");
let ej5Boton = document.querySelector(".ej5-enviar")
const mostrarResultado = new DocumentFragment();

ej5Boton.addEventListener("click", sumacion);

function sumacion(){
  let resultado = parseInt(ej5_1.value) + parseInt(ej5_2.value);
  let resultado1 = document.querySelector(".ej5-resultado");
  resultado1.innerText = `Resultado: ${resultado}`;
  mostrarResultado.appendChild(resultado1);
  ej5.appendChild(mostrarResultado);
}
/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const lugar = new DocumentFragment();

const ej6Paises = document.querySelector(".ej6-paises");
const ej6DiasSemana = document.querySelector(".ej6-diasSemana");

diasSemana.forEach(function(a){
  let option = document.createElement("option");
  option.innerText = a;
  lugar.appendChild(option);
  ej6DiasSemana.appendChild(lugar);
});

paises.forEach(function(a){
  let option = document.createElement("option");
  option.innerText = a;
  lugar.appendChild(option);
  ej6Paises.appendChild(lugar);
});

/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];

const ej7 = document.querySelector(".ej7-resultado");
const turno = document.querySelector(".momentos");

 turno.addEventListener("change", cambiarTurno);

function cambiarTurno(){
  switch(turno.value) {
    case "Mañana": 
      ej7.innerHTML = `<div>Mañana</div>`;
      break;
    case "Tarde":
      ej7.innerHTML = `<div>Tarde</div>`;
      break;
    case "Noche":
      ej7.innerHTML = `<div>Noche</div>`;
      break;
   }
}

momento.forEach(function(letras){
  turno.innerHTML += `<option>${letras}</option>`
});
/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/
