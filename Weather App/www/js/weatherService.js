// Code Adam used in his demo in class
app.service("weatherService", function ($http) {
  var API_KEY = "10e3cd1e90ea7df35786186d55eca4ec"; // INSERT API KEY HERE
  var COORDS = {
    lat: "42.589611", // INSERT LATITUDE HERE
    long: "-70.819806" // INSERT LONGITUDE HERE
  };
  var URL = "https://api.forecast.io/forecast/" +
            API_KEY + "/" + COORDS.lat + "," + COORDS.long
            + "?callback=JSON_CALLBACK"; // Request JSON-P response

  this.getData = function () {
      return $http.jsonp(URL);
  };
});
