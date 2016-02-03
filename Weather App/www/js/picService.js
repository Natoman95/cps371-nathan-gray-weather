app.service("picService", function () {
  var pic;

  // Gets a picture related to the temperature
  this.getTempPic = function (temp) {
    if (temp <= 10) {
      pic = "img/freezing.png";
    }
    else if (temp <= 35) {
      pic = "img/cold.png";
    }
    else if (temp <= 55) {
      pic = "img/cool.png";
    }
    else if (temp <= 65) {
      pic = "img/warm.png";
    }
    else if (temp <= 90) {
      pic = "img/hot.png";
    }
    else {
      pic = "img/burning.png";
    }
    return pic;
  }

  // Gets a picture related to the weather icon summary
  this.getIconPic = function (icon) {
    if (icon == "clear-day") {
      pic = "img/clear-day.png";
    }
    else if (icon == "clear-night") {
      pic = "img/clear-night.png";
    }
    else if (icon == "rain") {
      pic = "img/rain.png";
    }
    else if (icon == "snow") {
      pic = "img/snow.png";
    }
    else if (icon == "sleet") {
      pic = "img/sleet.png";
    }
    else if (icon == "wind") {
      pic = "img/wind.png";
    }
    else if (icon == "fog") {
      pic = "img/fog.png";
    }
    else if (icon == "cloudy") {
      pic = "img/cloudy.png";
    }
    else if (icon == "partly-cloudy-day") {
      pic = "img/partly-cloudy-day.png";
    }
    else if (icon == "partly-cloudy-night") {
      pic = "img/partly-cloudy-night.png";
    }
    else {
      pic = "img/clear-day.png"
    }
    return pic;
  }
});
