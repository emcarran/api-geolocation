var app = angular.module('myApp', ["ngGeolocation"]);

app.controller('geolocCtrl', ['$geolocation', '$scope', function ($geolocation, $scope) {
    $geolocation.getCurrentPosition({
        timeout: 60000
    }).then(function (position) {
        $scope.myPosition = position;
        console.log("inside controller", $scope.myPosition);
    });
}]);

app.controller("attractionsController", attractionsController);

attractionsController.$inject = ['$scope', '$http', '$timeout']

function attractionsController($scope, $http) {
    $scope.searchResults = [];
    $scope.isSearching = false;
    $scope.searchList = 0;

    $scope.search = function () {


        $http({
            method: "GET",
            //url: "http://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=4&origin=39.750307,-104.999472",
            url: "http://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=4&origin=" + geolocatedPosition,
        })

        .success(function (data) {
                if (data.resultsCount > 0) {
                    $scope.searchResults = data.searchResults;
                } else {
                    alert("Api call returns 200 but no results");
                }
                console.log($scope.searchResults);


            }),
            function (error) {
                console.log('Api call returns nothing');
            };
    };

    //submit function goes outside of the searh function
    $scope.submit = function () {
        $scope.search();
        $scope.isSearching = true;
    }
};
