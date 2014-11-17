'use strict';

/**
 * @ngdoc function
 * @name phrPrototypeApp.controller:RecordEncountersCtrl
 * @description
 * # RecordEncountersCtrl
 * Controller of the phrPrototypeApp
 */
angular.module('phrPrototypeApp')
    .controller('RecordEncountersCtrl', function ($scope, encounters, format) {

        $scope.entryType = 'encounters';
        $scope.masterEntries = [];
        $scope.entries = [];
        $scope.updateDate = null;

        function getUpdateDate() {
            //Should grab from files/update history.  Stubbed for now.
            $scope.updateDate = '12/1/2014';
        }

        function getRecords(callback) {
            encounters.getRecord(function (err, results) {
                $scope.masterEntries = results;
                callback();
            });
        }

        function formatDates() {
            //Add displayDate to all entries.
            _.each($scope.masterEntries, function (entry) {
                if (entry.date_time) {
                    _.each(entry.date_time, function (dateEntry) {
                        format.formatDate(dateEntry);
                    });
					entry.date_time.displayDate = format.outputDate(entry.date_time);
					entry.date_time.plotDate = format.plotDate(entry.date_time);
                }

                if (entry.findings) {
                	_.each(entry.findings, function (finding) {
                		if (finding.date_time) {
                			_.each(finding.date_time, function(dateEntry) {
                				format.formatDate(dateEntry);
                			});
                			finding.date_time.displayDate = format.outputDate(finding.date_time);
                		}
                	});
                }
            });
        }

        function formatAddress() {
        	_.each($scope.masterEntries, function (entry) {
        		_.each(entry.locations, function (loc) {
        			_.each(loc.address, function (addr) {
        				format.formatAddress(addr);
        			});
        		});
        	});
        }

        $scope.refresh = function () {
            getRecords(function (err) {
                getUpdateDate();
                formatDates();
                formatAddress();
                $scope.entries = $scope.masterEntries;
            });
        }

        $scope.refresh();

    });