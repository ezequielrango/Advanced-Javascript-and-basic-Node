const express = require('express');
const router = express();
const notFound = require('../middlewares/notFound'); // middleware 404 

// rutas de cada 'entidad'
const answerRouter = require('./answers'); 
const comprasRouter = require('./compras');
const rickRouter = require('./fetchApiExterna');
const saludoPepaRouter = require('./saludoPepa');

//endpoints
router.use('/teoria', answerRouter); 
router.use('/compras', comprasRouter);
router.use('/fetch',rickRouter);
router.use('/saludoPepa',saludoPepaRouter);

router.use(notFound);


module.exports = router;