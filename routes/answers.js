const express = require('express');
const router = express();
const {teoria} = require('../utils/answers');

router.get('/list', (req,res)=> {  //  api/teoria/list
    try {
        const question =  teoria;
        res.status(200).json(question)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get('/:id', (req,res)=> { //  api/teoria/:id
    try {
        const {id} = req.params;  // desestructuro el objeto params de la peticion, obteniendo solo el id pasado
        const question =  teoria[+id-1]; // fuerzo la conversion del id a number con el + antes, y al id obtenido del params le resto uno para que coincida con los valores del indice del array importado
        res.status(200).json(question)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;