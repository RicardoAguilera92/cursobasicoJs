# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript! 

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
R= Espacios en memoria donde podemos guardar informacion dependiendo de los tipos y estructuras  de datos que soporte nuestro lenguaje.
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
R= Declarar es cuando le decimos a JS que vamos a crear una variable mientras inicializar es asignarle un valor a esa variable.
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
R= con el operador + podemos sumar numeros pero con la variable string podemos concatenar esas variables con el operador +.
- ¿Cuál operador me permite sumar o concatenar?
R= el operador que nos permite concatenar y sumar es +.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Ricardo';
let apellido = 'Aguilera';
let username = 'riagma';
let edad = 30;
let email = 'riagma@gmail.com'
let isMayorDeEdad = true;
let ahorro = 100;
let dedudas = 0;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let fullName = nombre + ' ' + apellido;
let fullMoney = ahorro - deudas;
```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
R= Nos permiten encapsular bloques de codigos para reutilizarlos y ejecutarlos en el futuro.
- ¿Cuándo me sirve usar una función en mi código?
R= Cuando tenemos variables con bloques de codigos similares que podemos encapsular para reutilziar mas de una vez en el furuto.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
R= las funciones reciben parametros cuando las estamos creando. Y les enviamos argumentos cuando las ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

Respuesta:

function saludo(name, lastname, nickname){
    const completeName = nombreCompleto(name, lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
R= forma en que ejecutamos un bloque de codigo y otro dependiendo de alguna condicion o validacion.
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R= if, switch. El condicional IF nos permite hacer validaciones completamente distintas en cada validacion o condicional, mientras el siwtch, en todos los cases se comparan con la misma variable o condicion que defidimos en el switch.
- ¿Puedo combinar funciones y condicionales?
R= si.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


RESPUESTA:
if(tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == 'Basic'){
     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion == 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```
function suscipcion(suscripcion){
    if(suscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
    return;
    }if(suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }if(suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }if(suscripcion == 'ExpertPlus'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    console.warn.('no existe ese tipo de suscripcion');
    
}
```
> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
```
const tiposSuscripciones={
free: 'Solo puedes tomar los cursos gratis',
basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
expertplus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function tipoSuscripciones{
    if (tiposSuscripciones[suscripcion]){
        console.log(tiposSuscripciones[suscripcion]);
        return;
    }
    console.warn.('no existe ese tipo de suscripcion');
}
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
R= Ejecutar un bloque de codigo hasta que se cumpla cierta condicion.
- ¿Qué tipos de ciclos existen en JavaScript?
R= while, for, do while.
- ¿Qué es un ciclo infinito y por qué es un problema?
R= Cuando la validacion de nuestros condicionales nunca se cumple y termina danando la aplicacion.
- ¿Puedo mezclar ciclos y condicionales?
R= si.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


RESPUESTA:
let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
let respuesta;
while(respuesta != '4'){
    let pregunta = prompt('cuanto es 2+2?')
    respuesta = pregunta;
}
```


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
R= lista de elementos.
- ¿Qué es un objeto?
R= Lista de elementos donde cada elemento tiene un nombre clave.
- ¿Cuándo es mejor usar objetos o arrays?
R= Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas. Mientras que en un objeto los nombres de cada elemento son importantes para nuestro algoritmo.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R= si.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```
function imprimirElemento(arr){
    console.log(arr[0]);
}
```
### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```
function imprimirElemento(arr){
    for (let i=0; i<=arr.length ;i++){
        console.log(arr[i]);
    }
}
```
### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```
function imprimirElemento(obj){
    const arr=Object.values(obj);
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}               
```

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
