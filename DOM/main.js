//console.log({
//    h1,
 //   p,
//    parrafo,
//    pid,
//    input,
//});

//h1.innerText = 'Cambio de h1';
//h1.innetHTML              
//h1.getAttribute cambiar clase
//h1.setAttribute('class', 'rojo') modificar atributos
//h1.classList.add('rojo') agregar clase
//h1.classList.remove('verde') elimita clase

//input.value = "456";
//console.log(document.createElement('img'));  
//const img = document.createElement('img');
//img.setAttribute('src', 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg');
//console.log(img);
//pid.innerHTML="";
//pid.append(img);
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
//const p = document.querySelector('p');
//const parrafo = document.getElementsByClassName('parrafo');
//const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculo');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumar);

function sumar (event){
    event.preventDefault();
    const suma = input1.value + input2.value;
    pResult.innerText = "Resultado: " + suma;
}