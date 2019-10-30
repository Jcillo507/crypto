const Sequelize = require('sequelize')
const UserModel = require('./user')
const CoinModel = require('./coin')
const bcrypt = require('bcrypt')

// connection to the database
const db = new Sequelize({
  database: 'crypto',
  dialect: 'postgres'
})

const User = UserModel(db, Sequelize)
const Coin = CoinModel(db, Sequelize)

Coin.belongsToMany(User, {
  onDelete: 'cascade',
  through: 'user_coins'
})

User.belongsToMany(Coin, {
  onDelete:'cascade',
  through: 'user_coins'
})

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12)
  user.password = hashedPassword
})

module.exports = {
  db,
  User,
  Coin
}