// Initializes the `Purchases` service on path `/purchases`
const createService = require('feathers-sequelize');
const createModel = require('../../models/purchases.model');
const hooks = require('./purchases.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'purchases',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/purchases', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('purchases');

  service.hooks(hooks);
};
