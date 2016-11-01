/**
 * Created by carlahyenne on 26/10/2016.
 */

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.interval = {
        values : ['Day', 'Week','Month','Year'],
        selected : 'Week'
    };

    $scope.cupCost = 0.10; //£
    $scope.cupCO2 = 0.569; //CO2
    $scope.cupWaste = 0.255; //m3

    $scope.reuseRatio = 0.50;
    $scope.numberCoffees = 1968;

});

function timeConversion(fromTime, toTime, x) {
    //day, week, month, year
    var result;
    switch(fromTime) {
        case 'day':
            result = {
                'day': x,
                'week': x * 7,
                'month': x * 365 / 12,
                'year': x * 365
            }
        case 'week':
            result = {
                'day': x / 7,
                'week': x,
                'month': x * 52 / 12,
                'year': x * 52
            };
        case 'month':
            result = {
                'day':x*12/36,
                'week':x*12/52,
                'month': x,
                'year': x*12
            };
        case 'year':
            result = {
                'day':x/365,
                'week':x/52,
                'month': x/12,
                'year': x
            };
    }

    return result[toTime];

}
