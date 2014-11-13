'use strict';

/**
 * @ngdoc service
 * @name phrPrototypeApp.record/allergies
 * @description
 * # record/allergies
 * Service in the phrPrototypeApp.
 */
angular.module('phrPrototypeApp')
    .service('allergies', function allergies() {

        this.getRecord = function (callback) {

            var tmpAllergies = [{
                "date": [{
                    "date": "2007-05-01T00:00:00Z",
                    "precision": "day"
                }],
                "identifiers": [{
                    "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
                }],
                "allergen": {
                    "name": "ALLERGENIC EXTRACT, PENICILLIN",
                    "code": "314422",
                    "code_system_name": "RXNORM"
                },
                "severity": "Moderate to severe",
                "status": "Inactive",
                "reaction": [{
                    "reaction": {
                        "name": "Nausea",
                        "code": "422587007",
                        "code_system_name": "SNOMED CT"
                    },
                    "severity": "Mild"
                }]
            }, {
                "date": [{
                    "date": "2006-05-01T00:00:00Z",
                    "precision": "day"
                }],
                "identifiers": [{
                    "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
                }],
                "allergen": {
                    "name": "Codeine",
                    "code": "2670",
                    "code_system_name": "RXNORM"
                },
                "severity": "Moderate",
                "status": "Active",
                "reaction": [{
                    "reaction": {
                        "name": "Wheezing",
                        "code": "56018004",
                        "code_system_name": "SNOMED CT"
                    },
                    "severity": "Mild"
                }]
            }, {
                "date": [{
                    "date": "2008-05-01T00:00:00Z",
                    "precision": "day"
                }],
                "identifiers": [{
                    "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
                }],
                "allergen": {
                    "name": "Aspirin",
                    "code": "1191",
                    "code_system_name": "RXNORM"
                },
                "severity": "Mild to moderate",
                "status": "Active",
                "reaction": [{
                    "reaction": {
                        "name": "Hives",
                        "code": "247472004",
                        "code_system_name": "SNOMED CT"
                    },
                    "severity": "Mild to moderate"
                }]
            }];

            callback(null, tmpAllergies);

        }

    });