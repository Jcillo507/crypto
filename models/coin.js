module.exports = (db, Sequelize) =>{
  return db.define("coin",{
    name: Sequelize.STRING,
  })
}