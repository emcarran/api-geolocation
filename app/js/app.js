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
    $scope.search = function (position, text, collection) {
        console.log(text);
        // make request to MapQuest api
        $http({
                method: "GET",
                url: "http://www.mapquestapi.com/search/v3/prediction?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&collection=airport&location="+ pos.lng + "," + pos.lat+"&q=air"
            
//                http://www.mapquestapi.com/search/v3/prediction?key=KEY&collection=adminArea,poi,address,category,franchise,airport&q=den

            //            "http://www.mapquestapi.com/search/v3/prediction?key=mzjLtladPkAFANEEharRcAvY1h4ev9vo&collection=address,category,franchise,airport&location="+ pos.lng + "," + pos.lat+"&q="+text            
//              +collection
//              http://www.mapquestapi.com/search/v3/prediction?key=KEY&collection=adminArea,poi,address,category,franchise,airport&q=den
            })
        
            // upon success, update search results and display label
            .success(function (data) {
            console.log(pos);
            console.log(data);
                if (data.results.length > 0) {
                    // once you get the search results, update the search result array
                    $scope.searchResults = data.results;
                    console.log($scope.results);
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

