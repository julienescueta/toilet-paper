const assert = require('assert');
const app = require('../../src/app');

describe('\'Consumers\' service', () => {
  it('registered the service', () => {
    const service = app.service('consumers');

    assert.ok(service, 'Registered the service');
  });
});
