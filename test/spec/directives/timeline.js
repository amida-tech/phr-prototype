'use strict';

describe('Directive: timeline', function () {

  // load the directive's module
  beforeEach(module('phrPrototypeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<timeline></timeline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the timeline directive');
  }));
});
