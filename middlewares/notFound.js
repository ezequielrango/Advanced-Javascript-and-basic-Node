const notFound = ((req,res,next) => {
    res.status(404).send("no se encontro niguna pagina ")
});

module.exports = notFound;