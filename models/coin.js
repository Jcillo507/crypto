module.exports = (db, Sequelize) => {
  return db.define("coins", {
    name: {
      type: Sequelize.STRING,
    }
  })
}