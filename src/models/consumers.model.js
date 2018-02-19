// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const consumers = sequelizeClient.define('consumers', {
    id:   { type: DataTypes.UUID, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    size: { type: DataTypes.INTEGER, allowNull: true }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  consumers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return consumers;
};
