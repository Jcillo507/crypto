module.exports = (db, Sequelize) => {
  return db.define("favorites", {
    userId:Sequelize.INTEGER,
    coin: Sequelize.STRING,
    
  })
}