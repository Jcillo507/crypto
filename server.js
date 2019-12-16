const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const authRouter = require('./routers/authRouter')
const passport = require('passport')
const appRouter = require('./routers/appRouter')
const { authorized } = require('./auth/auth')
const { User, Coin } = require("./models");
const path = require('path')

// establishing the I/O port
const PORT = process.env.PORT || 4567

// initializing the express app
const app = express()

if (process.env.NODE_ENV === 'production') {
  // If the node environment is production, connect to a remote PSQL database
  const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
  });
}
else {
  // Else connect to a local instance of PSQL running on your machine
  const db = new Sequelize({
    database: 'crypto', // Name of your local database
    dialect: 'postgres'
  });
}
app.use(express.static(path.join(__dirname, './client/build')));

// configure middleware
app.use(logger('dev'))
app.use(cors())
// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/auth', authRouter)
app.use('/app', authorized, appRouter)
app.use(passport.initialize())

app.get('/', async (req, res) => {
  try {
    res.json({ message: 'Crypto' })
  } catch (e) {
    res.status(e.status).json({ message: e.status })
  }
})
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ message: err.message })
})

app.post(`/dashboard/:userId`, async( req, res)=>{
  try {
    const { userId } = req.params
    const user = await User.findByPk(userId)
    const newFav =await Coin.create(req.body)
    await user.addCoin(newFav)
    res.send(newFav)
  } catch (error) {
    throw error
  }
})
app.get(`/dashboard/:userId`, async (req, res)=>{
  try {
    const { userId } = req.params
    const user= await User.findByPk(userId,{
      include: [{
        model: Coin,
        through: 'user_coins'
      }]
    } )
    res.send(user)
    console.log(user)
  } catch (error) {
    throw error
  }
}
)
app.put(`/dashboard/:userId/:coin`, async (req, res) => {
  try {
    const { userId, coin } = req.params
    console.log(req.params, coin)
    const user = await User.findByPk(userId)
    const unFav = await Coin.findAll({where:[{name:coin}]})
    console.log(unFav)
    await user.removeCoin(unFav)
    res.send(unFav)
  } catch (error) {
    throw error
  }
})
if (process.env.NODE_ENV == "production") {
  app.use('*', (req, res) => res.sendFile(path.join(__dirname, './client/build', "index.html")));
}

app.listen(PORT, () => console.log(`App is up and running listening on port ${PORT}`))
