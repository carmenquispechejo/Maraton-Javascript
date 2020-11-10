/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/

//alert("Bievenidas/os al Maratón Guayerd");

/*
Ej - 2: Completar/arreglar el código para que la función focusHandler()
 se ejecute cuando el foco este puesto en el input.ej2-nombre. 
 Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector(".ej2-resultado");
ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler);

function focusHandler(){
  ej2Resultado.innerText = "El input nombre tiene el foco";
}

function blurHandler(){
  ej2Resultado.innerText = "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo 
desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);

function mostrarSaludo(txt,posicion){
  posicion.innerText = txt;
}

/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/
//DOM
const btn4 = document.querySelector(".ej4-enviar");
// ESCUCHO EVENTOS
btn4.addEventListener("click", btn4Handler)

// FUNCION CALLBACK
function btn4Handler (e){
  const email4 = document.querySelector(".ej4-email");
  const mensaje4 = document.querySelector(".ej4-mensaje");
  const resultado4 = document.querySelector(".ej4-resultado");
  resultado4.innerText = `Email: ${email4.value} Mensaje: ${mensaje4.value}`;
  email4.value = "";
  mensaje4.value = "";
}


/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y 
  mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en
   div.ej5-resultado "Ingreso erróneo"
*/

// DOM 
const ej5Resultado = document.querySelector(".ej5-resultado"); //DIV
const it1 = document.querySelector(".it1");                    //INPUT
const it2 = document.querySelector(".it2");                    //INPUT
const buttonEj5 = document.querySelector(".buttonEj5");        //BUTTON

// ESCUCHO EVENTOS
buttonEj5.addEventListener("click", sumarEj5); 

// FUNCION CALLBACK 
function sumarEj5() {
  num1 = parseInt(it1.value);
  num2 = parseInt(it2.value);
  if (isNaN(num1) || isNaN(num2) ){
    ej5Resultado.innerText = "Ingreso erróneo";
  }else{
    const suma = num1 + num2;
    ej5Resultado.innerText = suma; 
    console.log(suma);
  }
}


/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays 
correspondientes.
Recorrerlos y crear los <option> según corresponda
*/
//DOM
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const selectPaises = document.querySelector(".ej6-paises");
const selectDiasSemana = document.querySelector(".ej6-diasSemana");

const fpais = new DocumentFragment(); 
const fsemana = new DocumentFragment();


paises.forEach (function(pais){
  const option = document.createElement("option");
  option.value = pais
  option.innerText = pais;
  fpais.appendChild(option); 

});

selectPaises.appendChild(fpais);

diasSemana.forEach (function(dia){
  const option = document.createElement("option");
  option.value = dia;
  option.innerText = dia;  
  fsemana.appendChild(option);
});

selectDiasSemana.appendChild(fsemana);

/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor 
del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];
//DOM
const resultado7 = document.querySelector(".ej7-resultado");
const selec7 = document.querySelector(".momentos");

const fmomento = new DocumentFragment();

momento.forEach(function(moment){
  const option = document.createElement("option");
  option.innerText = moment;
  fmomento.appendChild(option);
});

selec7.appendChild(fmomento);

selec7.addEventListener("change", selec7Handler);

function selec7Handler(e){
  resultado7.innerText = e.target.value;
}


/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. 
Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","hola"); 
//Este es el password que deben comparar con el ingreso del usuario

//DOM
const inputEj8 = document.querySelector("#password");
const buttonEj8 = document.querySelector("#button-ej8");
const ej8Resultado = document.querySelector(".ej8-resultado");

//ESCUCHO EVENTO 
buttonEj8.addEventListener("click", clickHandler);

//FUNCION CALLBACK 
function clickHandler(){
  if(localStorage.getItem("password") == inputEj8.value){
    ej8Resultado.innerText = "OK";
  }else{
    ej8Resultado.innerText = "ERROR";
  }
}


/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se 
encuentra en el array utilizando la siguiente plantilla:

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

const resultadoEj9 = document.querySelector(".ej9-resultado");

usuarios.forEach(function(usuario){
  resultadoEj9.innerHTML +=`<div class="usuario-contenedor">
                                  <div class="fila1">
                                  <span class="title">Nombre:</span><span>${usuario.nombre}</span>
                                  <span class="title">NroCliente:</span><span>${usuario.nroCliente}</span>
                                  </div>
                                  <div class="fila2">
                                  <span class="title">DNI:</span><span>${usuario.dni}</span>
                                    <span class="title">Fecha Nacimiento:</span><span>${usuario.fechaNacimiento}</span>
                                 </div>
                              </div>`
});

//DOM 
//const ej9Resultado = document.querySelector(".ej9-resultado");



/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una 
base de datos de contactos para poder vender productos. Debemos crear para ellos 
un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto
   en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde
   localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado 
  de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas
   de validación de datos.
*/

const divEj10 = document.querySelector("div.ej10-form")


divEj10.innerHTML = `<input type="text" class="ej10-nombre" placeholder="Ingrese su nombre" required><br><br>
<input type="text" class="ej10-email" placeholder="Ingrese su email" required><br><br>
<input type="number" class="ej10-telefono" placeholder="Ingrese su número de telefono" required><br><br>
<select name="horario" id="ej10-horario" required>
    <option value="null">Horario de contacto</option>
    <option value="mañana">Mañana</option>
    <option value="tarde">Tarde</option>
    <option value="noche">Noche</option>
</select><br><br>
<select name="producto" id="ej10-producto" required>
    <option value="null">Producto</option>
    <option value="credito">Credito</option>
    <option value="celular">Celular</option>
    <option value="viajes">Viajes</option>
    <option value="seguros">Seguros</option>
</select><br><br>
<button class="ej10-guardar">Guardar</button><br><br>
<button class="ej10-finalizar">Finalizar</button>`;

const nombreEj10 = document.querySelector(".ej10-nombre")
const emailEj10 = document.querySelector(".ej10-email")
const telefonoEj10 = document.querySelector(".ej10-telefono")
const horarioEj10 = document.querySelector("#ej10-horario")
const productoEj10 = document.querySelector("#ej10-producto")
const guardarEj10 = document.querySelector(".ej10-guardar")
const finalizarEj10 = document.querySelector(".ej10-finalizar")
const divResultadoEj10 =document.querySelector("div.ej10-resultado")
const arrEj10=[];
const usuarioEj10= localStorage.getItem("usuarios");

guardarEj10.addEventListener("click",guardarArr);

recuperarArray();

finalizarEj10.addEventListener("click",finalEj10)

function guardarArr(){
arrEj10 = [`Nombre: ${nombreEj10.value}`, `Email: ${emailEj10.value}`,`Telefono: ${telefonoEj10.value}`,`Horarios:${horarioEj10.value}`,`Producto : ${productoEj10.value}`];
console.log(arrEj10)
localStorage.setItem("usuarios",JSON.stringify(arrEj10))
nombreEj10.value=""
emailEj10.value=""
telefonoEj10.value=""
productoEj10.value= null
horarioEj10.value = null
}

function recuperarArray(){
if (localStorage.getItem("usuarios")){
  arrUsuarios = JSON.parse(usuarioEj10)
  console.log(arrUsuarios)
 }
}

function finalEj10(){
arrUsuario = JSON.parse(usuarioEj10)
divResultadoEj10.innerText = `${arrUsuario[0]}
${arrUsuario[1]}
${arrUsuario[2]}
${arrUsuario[3]}
${arrUsuario[4]}`
localStorage.removeItem("usuarios");

}


