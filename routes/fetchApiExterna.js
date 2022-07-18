const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); // importo fetch
const express = require('express');
const router = express();

router.get('/rick', async (req,res) => {  // funcion asincrona
    try {
        const url = "https://rickandmortyapi.com/api/character/1"; // url desde donde solicito el recurso
        const response = await fetch(url); //promesa
        const {id,name,status,gender,origin,species} = await response.json(); // la promesa se resuelve y la manejo como json, pero uso destructuring para utilizar ciertos datos en lugar de todos
        const data = { // creo objeto con los datos deseados
            id,
            name,
            status,
            gender,
            origin,
            species
        };
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
