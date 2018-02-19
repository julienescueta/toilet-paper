const assert = require('assert');
const app = require('../../src/app');

describe('\'Purchases\' service', () => {
  it('registered the service', () => {
    const service = app.service('purchases');

    assert.ok(service, 'Registered the service');
  });
});
