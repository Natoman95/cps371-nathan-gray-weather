// Code Adam used in his demo in class
app.service("weatherService", function ($http) {
  var zip = "01984";
  var proxyURL = "/app-server/";
  var fullURL = proxyURL + "?zip=" + zip;

  this.getData = function () {
    return $http.get(fullURL);
  };
});
