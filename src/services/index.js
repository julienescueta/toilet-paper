const consumers = require('./consumers/consumers.service.js');
const purchases = require('./purchases/purchases.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(consumers);
  app.configure(purchases);
};
