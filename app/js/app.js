var app = angular.module('myApp', ["ngGeolocation"]);

app.controller("searchController", searchController);

searchController.$inject = ['$scope', '$http', '$timeout']

function searchController($scope, $http) {
    // search results are initially empty
    $scope.searchResults = [];
    // the places found label  is intially hidden
    $scope.showPlaces = false;
    // the no places found label is also initially hidden
    $scope.noPlaces = false;
    // the api Error label is also initially hidden
    $scope.apiError = false;
    // the list is initialy hidden
    $scope.hideList = true;
    // when enter is clicked on the form, this funcion is called
    $scope.search = function (position) {
        // make request to MapQuest api
        $http({
                method: "GET",
                url: "https://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=5&origin=" + pos.lat + "," + pos.lng
            })
            // upon success, update search results and display label
            .success(function (data) {
                if (data.resultsCount > 0) {
                    // once you get the search results, update the search result array
                    $scope.searchResults = data.searchResults;
                    console.log($scope.searchResults);
                    // show the places found label;
                    $scope.showPlaces = true;
                    $scope.hideList = false;
                } else {
                    $scope.showPlaces = false;
                    $scope.searchResults = "";
                    $scope.noPlaces = true;
                    $scope.apiError = false;
                    console.log("Api call has been made successfully, but there are no results");
                }
            })

        .error(function (data, status, headers, config) {
            $scope.showPlaces = false;
            $scope.searchResults = "";
            $scope.noPlaces = false;
            $scope.apiError = true;
            console.log(status + " error attempting to access MapQuest");

        });
    };
};
