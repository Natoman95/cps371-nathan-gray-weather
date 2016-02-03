app.controller('DateDataCtrl', function ($scope, dateService) {
  // Get the day based on the current day (offset is how many days past
  // today the day is that you're looking for)
  $scope.getDay = function (offset) {
    return dateService.getDay(offset);
  }

  // Get the date based on the current day (offset is how many days past
  // today the day is that you're looking for)
  $scope.getDate = function (offset) {
    return dateService.getDate(offset);
  }
});
