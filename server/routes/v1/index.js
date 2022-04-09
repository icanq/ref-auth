const v1 = require('express').Router()
const { productRouter } = require('./product')
const { userRouter } = require('./user')

v1.use("/users", userRouter)
v1.use("/products", productRouter)

module.exports = { v1 }