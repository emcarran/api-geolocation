angular.module('travelLibrary', [])

//Initialize constants
//.constant('GOOGLE_API_PREFIX', 'https://www.googleapis.com/geolocation/v1/geolocate')
.constant('GOOGLE_API_KEY', 'AIzaSyBC7EtYRUIx6NPiiMPvFwIpTMn8OuFKP4Y')

//Accept the current location as a parameter
.factory('geoLocation', ['$http', 'GOOGLE_API_PREFIX', 'GOOGLE_API_KEY', function ($http, GOOGLE_API_PREFIX, GOOGLE_API_KEY) {
    var params = {
        apiKey: 'GOOGLE_API_KEY',
        address: 'location'
    }

    return $http({
        method: 'GET',
        url: 'GOOGLE_API_PREFIX',
        params: params
    })

    //callback function goes here
    .then(function () {
        return response.data.results.location;
    });
}])
