var app = angular.module('myApp', ["ngGeolocation"]);

app.controller("searchController", searchController);

searchController.$inject = ['$scope', '$http', '$timeout']

function searchController($scope, $http) {
    // search results are initially empty
    $scope.searchResults = [];
    // the places found label  is intially hidden
    $scope.showPlaces = false;
    // when enter in clicked on the form, this funcion is called
    $scope.search = function (position) {
        // make request to MapQuest api
        $http({
                method: "GET",
                url: "http://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=5&origin=" + pos.lat + "," + pos.lng
            })
            // upon success, update search results and display label
            .success(function (data) {
                if (data.resultsCount > 0) {
                    // once you get the search results, update the search result array
                    $scope.searchResults = data.searchResults;
                    console.log($scope.searchResults);
                    // show the places fund label;
                    $scope.showPlaces = true;
                } else {
                    alert("Api call returns 200 but no results");
                }
            }),

            function (error) {
                console.log('Api call returns nothing');
            };
    };
};
