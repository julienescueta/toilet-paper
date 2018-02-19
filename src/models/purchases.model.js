// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const purchases = sequelizeClient.define('purchases', {
    id:   { type: DataTypes.UUID, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    amount: { type: DataTypes.INTEGER, allowNull: true },
    unit: { type: DataTypes.TEXT, allowNull: true },
    datePurchased: {type: DataTypes.DATE, allowNull: false }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  purchases.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    models.purchases.belongsTo(models.consumers, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return purchases;
};
