'use strict';

/**
 * @ngdoc function
 * @name phrPrototypeApp.controller:RecordEncountersCtrl
 * @description
 * # RecordEncountersCtrl
 * Controller of the phrPrototypeApp
 */
angular.module('phrPrototypeApp')
    .controller('RecordEncountersCtrl', function ($scope, $location, $anchorScroll, encounters, format) {

        $scope.entryType = 'encounters';
        $scope.masterEntries = [];
        $scope.entries = [];
        $scope.updateDate = null;
        $scope.partialEntries = [];
        $scope.alertShow = true;

        $scope.closeAlert = function () {
            $scope.alertShow = false;
        }

        $scope.newComment = {
            'starred': false
        };

        $scope.navClick = function (element) {
            var old = $location.hash();
            $location.hash(element);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };

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
                if (entry.data.date_time) {
                    _.each(entry.data.date_time, function (dateEntry) {
                        format.formatDate(dateEntry);
                    });
                    entry.data.date_time.displayDate = format.outputDate(entry.data.date_time);
                    entry.data.date_time.plotDate = format.plotDate(entry.data.date_time);
                }

                if (entry.data.findings) {
                    _.each(entry.data.findings, function (finding) {
                        if (finding.date_time) {
                            _.each(finding.date_time, function (dateEntry) {
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
                _.each(entry.data.locations, function (loc) {
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