'use strict';

/**
 * @ngdoc service
 * @name phrPrototypeApp.record/results
 * @description
 * # record/results
 * Service in the phrPrototypeApp.
 */
angular.module('phrPrototypeApp')
    .service('results', function results() {

        this.getRecord = function (callback) {

            var tmpResults = [{
                "identifiers": [{
                    "identifier": "7d5a02b0-67a4-11db-bd13-0800200c9a66"
                }],
                "result_set": {
                    "name": "CBC WO DIFFERENTIAL",
                    "code": "43789009",
                    "code_system_name": "SNOMED CT"
                },
                "results": [{
                    "identifiers": [{
                        "identifier": "107c2dc0-67a5-11db-bd13-0800200c9a66"
                    }],
                    "result": {
                        "name": "HGB",
                        "code": "30313-1",
                        "code_system_name": "LOINC"
                    },
                    "date_time": {
                        "point": {
                            "date": "2000-03-23T14:30:00Z",
                            "precision": "minute"
                        }
                    },
                    "status": "completed",
                    "reference_range": {
                        "range": "M 13-18 g/dl; F 12-16 g/dl"
                    },
                    "interpretations": [
                        "Normal"
                    ],
                    "value": 13.2,
                    "unit": "g/dl"
                }, {
                    "identifiers": [{
                        "identifier": "107c2dc0-67a5-11db-bd13-0800200c9a66"
                    }],
                    "result": {
                        "name": "WBC",
                        "code": "33765-9",
                        "code_system_name": "LOINC"
                    },
                    "date_time": {
                        "point": {
                            "date": "2000-03-23T14:30:00Z",
                            "precision": "minute"
                        }
                    },
                    "status": "completed",
                    "reference_range": {
                        "low": "4.3",
                        "high": "10.8",
                        "unit": "10+3/ul"
                    },
                    "interpretations": [
                        "Normal"
                    ],
                    "value": 6.7,
                    "unit": "10+3/ul"
                }, {
                    "identifiers": [{
                        "identifier": "107c2dc0-67a5-11db-bd13-0800200c9a66"
                    }],
                    "result": {
                        "name": "PLT",
                        "code": "26515-7",
                        "code_system_name": "LOINC"
                    },
                    "date_time": {
                        "point": {
                            "date": "2000-03-23T14:30:00Z",
                            "precision": "minute"
                        }
                    },
                    "status": "completed",
                    "reference_range": {
                        "low": "150",
                        "high": "350",
                        "unit": "10+3/ul"
                    },
                    "interpretations": [
                        "Low"
                    ],
                    "value": 123,
                    "unit": "10+3/ul"
                }]
            }];

            callback(null, tmpResults);

        }

    });