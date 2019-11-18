const Sequelize = require('sequelize')
const UserModel = require('./user')
const CoinModel = require('./coin')
const FavoriteModel = require('./favorites')
const bcrypt = require('bcrypt')

// connection to the database
const db = new Sequelize({
  database: 'crypto_db',
  dialect: 'postgres'
})

const User = UserModel(db, Sequelize)
const Coin = CoinModel(db, Sequelize)
const Favorites = FavoriteModel(db, Sequelize)

Coin.belongsToMany(User, {
  onDelete: 'cascade',
  through: 'favorites'
})

User.belongsToMany(Coin, {
  onDelete:'cascade',
  through: 'favorites'
})

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12)
  user.password = hashedPassword
})

module.exports = {
  db,
  User,
  Coin, 
  Favorites
}