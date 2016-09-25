/*
angular.module('travelLibrary', [])

var lat = -33.8688
var lng = 151.2195
$.ajax({
        url: 'http://www.mapquestapi.com/directions/v2/route?',
        dataType: 'jsonP',
        crossDomain: true,
        data: {
            key: 'mzjLtladPkAFANEEharRcAvY1h4ev9vo',
            origin: lat + lng,
            maxMatches: 10
        }
    })
    */

/*
//initiliaze constants
.constant('MAPQUEST_API_PREFIX', 'http://www.mapquestapi.com/directions/v2/route')
    .constant('MAPQUEST_API_KEY', 'mzjLtladPkAFANEEharRcAvY1h4ev9vo')

var request = {
    callback: 'JSON_CALLBACK',
};

$.ajax({
    url: "http://www.mapquestapi.com/directions/v2/route",
    data: request,
    dataType: "jsonp",
    type: "GET",
})
*/
//Accept the location as a parameter and returns the tourist attractions for that location
/*.factory('localAttractions', ['$http', 'TRIPADVISOR_API_PREFIX', 'TRIPADVISOR_API_KEY', function ($http, TRIPADVISOR_API_PREFIX, TRIPADVISOR_API_KEY) {

            var urlBase = "http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396?";

            return {

                getData: function (lat, lng) {
                    var url = urlBase + "localInfoJSON";
                    var request = {
                        callback: 'JSON_CALLBACK',
                    };

                    $http({
                        method: 'JSONP',
                        url: url + lat ',' + lng,
                        params: request,
                        cache: true
                    })

                    //callback function goes here
                    .then(function (response) {
                        return response.data.results.location;

                    });
                }
            }])*/
