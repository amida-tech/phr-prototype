'use strict';

describe('Service: account', function () {

  // load the service's module
  beforeEach(module('phrPrototypeApp'));

  // instantiate service
  var account;
  beforeEach(inject(function (_account_) {
    account = _account_;
  }));

  xit('should do something', function () {
    expect(!!account).toBe(true);
  });

});
