app.controller('WeatherDataCtrl', function ($scope, weatherService, picService) {
  // Get weather data
  $scope.weather = weatherService.getData().then(function (response) {
      $scope.weather = response.data;
      console.dir($scope.weather);

      // Get the date
      $scope.getDate = function (day) {
        return new Date($scope.weather.daily[day].time * 1000);
      };

      // Get the pic for the day's temp
      $scope.getTempPic = function (day) {
        if (day === 0) {
          return picService.getTempPic($scope.weather.currently.temperature);
        }
        var avgTemp = ($scope.weather.daily[day].maxTemp +
          $scope.weather.daily[day].maxTemp) / 2;
        return picService.getTempPic(avgTemp);
      };

      // Get the pic for the weather summary icon
      $scope.getIconPic = function (day) {
        if (day === 0) {
          return picService.getIconPic($scope.weather.currently.icon);
        }
        return picService.getIconPic($scope.weather.daily[day].icon);
      };

    },
    function (error) {
      console.error("Error getting data!");
    });
});
