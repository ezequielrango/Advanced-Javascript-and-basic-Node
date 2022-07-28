const express = require('express');
const router = express();
const { listaCompras } = require('../utils/answers'); // importo el modulo que contiene un array con objetos y propiedades

router.get('/', (req, res) => { //   api/compras/
    try { // intenta hacer lo siguiente :
        const diasPares = listaCompras.filter((value, index) => { // le aplico el metodo filter al array importado, donde recibe como parametros cada elemento y su indice en el array
            if (index % 2 != 0) // con el resto , evaluo si la posicion que ocupa cada elemento en el array es impar (porque lo niego con el operador != )
            return value 
        });
        const response = {
            msg : 'Las listas de compras correspondientes a los dias par de la semana son: ',
            diasPares 
        };
        res.status(200).json(response); // codigo http ok con objeto, en formato JSON (JavaScript Object Notation)
    } catch (error) { // si no puede sale por aca
        res.status(500).json('Internal Server Error')
    }
})



module.exports = router;