const { Router } = require('express')

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.send('from user routes')
})

module.exports = { userRouter }