const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const Sequelize = require('sequelize');
const service = require('feathers-sequelize');
const app = express(feathers());
const uuidv4 = require('uuid/v4');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/toiletpaper');

// Turn on JSON body parsing for REST services
app.use(express.json())

// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));

// Set up REST transport using Express
app.configure(express.rest());

const Consumers = sequelize.define('consumers', {
  id:   { type: Sequelize.UUID, primaryKey: true },
  name: { type: Sequelize.TEXT, allowNull: false },
  size: { type: Sequelize.INTEGER, allowNull: true }
});

const Purchases = sequelize.define('purchases', {
  id:   { type: Sequelize.UUID, primaryKey: true },
  name: { type: Sequelize.TEXT, allowNull: false },
  amount: { type: Sequelize.INTEGER, allowNull: true },
  unit: { type: Sequelize.TEXT, allowNull: true },
  consumerId: { type: Sequelize.UUID, allowNull: false,
    references: { model: Consumers, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE } },
  datePurchased: {type: Sequelize.DATE, allowNull: false }
});

app.use('/consumers', service({
  Model: Consumers,
  paginate: {
    default: 10,
    max: 25
  }
}));
app.use('/purchases', service({
  Model: Purchases,
  paginate: {
    default: 10,
    max: 25
  }
}));

// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

Consumers.sync({force: true}).then(() => {
  return Consumers.create({
    id: uuidv4(),
    name: 'julien',
    size: 1
  });
});

// Start the server on port 3030
const port = 3030;
app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`);
});
