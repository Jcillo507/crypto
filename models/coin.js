module.exports = (db, Sequelize) => {
  return db.define("coins", {
    name: Sequelize.STRING,
  })
}