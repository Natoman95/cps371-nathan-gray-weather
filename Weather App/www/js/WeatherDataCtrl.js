app.controller('WeatherDataCtrl', function ($scope, weatherService, picService) {
  // Get weather data
  var weather = weatherService.getData().then(function (response) {
    weather = response.data;
    console.dir(weather);

    // Get current temp
    $scope.getCurrentTemp = function () {
      return weather.currently.temperature;
    };

    // Get the day's dew point
    $scope.getDewPoint = function (day) {
      if (day === 0) {
        return weather.currently.dewPoint;
      }
      return weather.daily.data[day].dewPoint;
    };

    // Get the day's humidity
    $scope.getHumidity = function (day) {
      if (day === 0) {
        return weather.currently.humidity;
      }
      return weather.daily.data[day].humidity;
    };

    // Get the day's summary
    $scope.getSummary = function (day) {
      if (day === 0) {
        return weather.currently.summary;
      }
      return weather.daily.data[day].summary;
    };

    // Get the day's max temp
    $scope.getMaxTemp = function (day) {
      return weather.daily.data[day].temperatureMax;
    };

    // Get the day's min temp
    $scope.getMinTemp = function (day) {
      return weather.daily.data[day].temperatureMin;
    };

    // Get the date
    $scope.getDate = function (day) {
      return new Date(weather.daily.data[day].time * 1000);
    };

    // Get the pic for the day's temp
    $scope.getTempPic = function (day) {
      if (day === 0) {
        return picService.getTempPic($scope.getCurrentTemp());
      }
      var avgTemp = ($scope.getMaxTemp(day) + $scope.getMinTemp(day)) / 2;
      return picService.getTempPic(avgTemp);
    };

    // Get the pic for the weather summary icon
    $scope.getIconPic = function (day) {
      if (day === 0) {
        return picService.getIconPic(weather.currently.icon);
      }
      return picService.getIconPic(weather.daily.data[day].icon);
    };

  }, function (error) {
    console.error("Error getting data!");
  });
});