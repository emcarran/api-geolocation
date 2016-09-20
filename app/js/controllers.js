app.controller('LocationCtrl', function ($scope) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $scope.$apply(function () {
                $scope.position = position;
            });
        });
    }
})
