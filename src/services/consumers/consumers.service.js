// Initializes the `Consumers` service on path `/consumers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/consumers.model');
const hooks = require('./consumers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'consumers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/consumers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('consumers');

  service.hooks(hooks);
};
