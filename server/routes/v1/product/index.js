const { Router } = require('express')

const productRouter = Router()

productRouter.get('/', (req, res) => {
  res.send('from product routes')
})

module.exports = { productRouter }