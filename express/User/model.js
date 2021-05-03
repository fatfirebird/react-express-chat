const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Message, {
        foreignKey: 'name'
      })
    }
  }
  
  User.init({
    name: DataTypes.STRING,
    hash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  })

  return User
}  