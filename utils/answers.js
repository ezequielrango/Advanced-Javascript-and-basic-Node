
module.exports = {
    
    teoria : [ 
        {
            primeraPregunta : "1. Definir: Javascript, Node, backend y frontend",
            Javascript : [
                {Javascript : "Javascript es un lenguaje de programación asíncrono, orientado a objetos, debilmente tipado. Se utiliza tanto del lado del servidor como de la interfaz del cliente. Se pueden desarrollar sitios webs, APIs, mobile, desktop entre otras. "},
                {Node : 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.'},
                {backend: ''},
                {frontend : ''}
            ]
        },
        {
            segundaPregunta : "2. Nombrar todos los tipos de datos vistos y un uso para cada uno.",
            TiposDatos :  [
                {Number: 'números ya sean enteros o decimales. Podemos utilizarlos para operaciones iritméticas en general, para realizar gran cantidad de cálculos.'},
                {String : 'Cadena de caracteres'}, 
                {Boolean: 'true o false.Podemos utlizarlos para realizar validaciones, "flags", etc'},
                {Null: 'Para inicializar una variable y darle un valor nulo, para luego poder asignarle uno nuevo'},
                {Undefined : 'Datos desconocidos o no definidos'},
                {NaN : 'Mejor conocido como "Not a Number", se devuelve cuando por ejemplo querermos realizar una operacion matematica entre dos datos, pero uno de ellos es un string'}
            ]
        },
        {
            terceraPregunta  : "Qué es el package.json? ¿Qué es una dependencia? ¿Y unadependencia de desarrollo?",
            NodeJs : [
                {packageJson : 'Es un archivo que se crea en la raíz del proyecto, donde contiene toda la informacion del mismo, tales como el nombre, version, dependencias instaladas,dependencias desarrollo instaladas, repositorio, autor, palabras claves, scripts propios, licencia, etc.'},
                {dependencia : 'Es una herramienta que agiliza el desarrollo de software. Por ejemplo Express es un framework que nos permite trabajar con el protocolo HTTP, Rrutas,etc. Otro ejemplo de dependencia podría ser body-parser, que nos permite convertir las peticiones que recibe nuestro servidor en objetos json. Morgan para interceptar el intercambio de req y res entre cliente y servidor, http erros, token, etc'},
                {dependenciaDesarrollo : 'Lo mismo que lo anterior, pero con la diferencia de que solo se utilizan en el entorno de desarrollo. Por ejemplo, los test unitarios'}
            ]
        },
        {
            cuartaPregunta : "Nombrar 3 métodos de array y su función.",
            MetodosArray : [
                {Pop : 'Para quitar el ultimo elemento de un array'},
                {Push : 'Para agregar un elemento al final del array'},
                {LastIndexOf : 'Para encontrar el elemento que ocupa la ultima posicion del array'}
            ]
        },
        {
            cincoPregunta : "¿Qué es el asincronismo? Cómo se implementa en Javascript?",
            Asincronismo : [
                {QueEs : 'La posibilidad de ejecutar diversos bloques de código de una manera que NO bloquee el hilo de ejecución.'},
                {Implementacion : 'Nuestro espacio de ejecución solo puede responder a 1 tarea a la vez pero pudiendo hacerlas sin importar si la respuesta es dato o error con tal de no obstruir el programa'}
            ]
        }],
    
    listaCompras : [
        {
            Día : "Domingo",
            Lista : ['banana','pera', 'anana']
        },
        {
            Día : "Lunes",
            Lista : ['uvas','chocolate','jamon']
        },
        {
            Día  : "Martes",
            Lista : ['banana','azucar', 'donuts']
        },
        {
            Día : "Miércoles",
            Lista : ['banana','pera', 'carne']
        },
        {
            Día : "Jueves",
            Lista : ['asado','donuts', 'sopa']
        },
        {
            Día  : "Viernes",
            Lista : ['banana','asado', 'anana']
        },
        {
            Día : "Sábado",
            Lista : ['sopa','pera', 'carne']
        },]
    
}