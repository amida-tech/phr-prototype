'use strict';

describe('Controller: RecordConditionsReviewCtrl', function () {

  // load the controller's module
  beforeEach(module('phrPrototypeApp'));

  var RecordConditionsReviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecordConditionsReviewCtrl = $controller('RecordConditionsReviewCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
