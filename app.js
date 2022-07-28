//módulos importantes
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config() //para usar variables de entorno

const notFound = require('./middlewares/notFound');


//configuración
app.set('port', process.env.PORT ||3000) //seteo el server con el puerto de la variable de entorno o con un number

app.use(morgan("tiny")); // implemento morgan


app.use('/api',require("./routes")); // para que todos los endpoints comiencen desde /api


//middlewares
app.use(notFound);

//server
app.listen(app.get('port'), () => {
    console.log('Server runnig in the port: ',app.get('port'));
})