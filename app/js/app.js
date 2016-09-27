/*$(document).ready(function () {

    /* Update all the parameters for the API test*/
/*var params = {
        key: 'mzjLtladPkAFANEEharRcAvY1h4ev9vo',
        tagged: 'html',
        site: 'mapquest',
        order: 'desc',
        sort: 'creation',
        maxMatches: 10
    };

    // on clicking the Go button, search the map quest API
    $("#search-button").click(function () {
        // make ajax call
        var result = $.ajax({

                url: "http://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=4&origin=" + pos.lat + "," + pos.lng,
                type: "GET"
            })
            //if the call is successful (status 200 OK) show results
            .done(function (result) {
                console.log(pos);
                console.log(result.searchResults);
                // get the search list from html
                var searchList = $('#search-details');
                // remove all prev. elements from search list
                searchList.empty();
                // getting all search resuts
                var searchResults = result.searchResults;
                // for each result we get
                searchResults.forEach(function (place) {
                    console.log(place.name);
                    // create new html elements
                    var el = $("<li>");
                    // set the element text to be the result name
                    $(el).text(place.name);
                    // applied the result to the search list
                    searchList.append(el);

                });
            })

        //if the call is NOT successful show errors
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    });

});
*/

var app = angular.module('myApp', ["ngGeolocation"]);

app.controller('geolocCtrl', ['$geolocation', '$scope', function ($geolocation, $scope) {
    $geolocation.getCurrentPosition({
        timeout: 60000
    }).then(function (position) {
        $scope.myPosition = position;
        console.log($scope.myPosition);
    });
}]);

app.controller("attractionsController", attractionsController);

attractionsController.$inject = ['$scope', '$http', '$timeout']

function attractionsController($scope, $http) {
    $scope.searchResults = [];
    $scope.isSearching = false;
    $scope.searchList = 0;

    $scope.search = function () {
        $scope.submit = function () {
            $scope.isSearching = true;
        }

        $http({
                method: "GET",
                url: "http://www.mapquestapi.com/search/v2/radius?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&maxMatches=4&origin=" + pos.lat + "," + pos.lng,
                params: {
                    key: "mzjLtladPkAFANEEharRcAvY1h4ev9vo",
                    text: $scope.searchPlace,
                    format: "json",
                    per_page: 10,
                    tagged: "html",
                    site: "MapQuest",
                    order: "desc",
                    sort: "creation"
                }

            })
            .success(function (data) {
                $scope.searchResults = data;
                console.log(data);
                /*$scope.isSearching = false;
                // helper function called
                $scope.searchList = data.photos.total;
                console.log(data);
                */


            }),
            function (error) {
                console.log('error!');
                $scope.isSearching = true;
            };

    };
};
