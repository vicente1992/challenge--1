// Create your Not Found Middleware here
module.exports = (req, res, next) => {
  return res.status(404).send({ message: 'Pagina no encontrada' })
}