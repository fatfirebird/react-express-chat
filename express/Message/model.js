const { Model, DataTypes } = require('sequelize')


module.exports = (sequelize) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Use, {
        foreignKey: 'name',
       })
    }

    static getMessages(limit = 10) {
      return Message.findAll({
        limit,
        order: [
          ['createdAt', 'DESC']
        ],
      })
    }

    static createNewMessage(values) {
      Message.create(values)
    }
  }
  
  Message.init({
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Messages',
  })

  return Message
}  