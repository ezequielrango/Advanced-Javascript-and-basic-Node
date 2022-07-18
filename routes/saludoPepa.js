const express = require('express');
const router = express();


router.get('/', (req,res) =>{
    try {
        const saludo = 'Hola Pepa';
        const Bienvenida = 'Bienvenida a tu servidor bien piola :) ';
        res.status(200).send(`<html><h1>${saludo}</h1><p>${Bienvenida}</p></html>`) 
    } catch (error) {
        res.status(500)
    }
});

module.exports = router;