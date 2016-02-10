app.service("picService", function () {
  var pic;

  // Gets a picture related to the temperature
  this.getTempPic = function (temp) {
    if (temp <= 10) {
      pic = "img/freezing.png";
    } else if (temp <= 35) {
      pic = "img/cold.png";
    } else if (temp <= 55) {
      pic = "img/cool.png";
    } else if (temp <= 65) {
      pic = "img/warm.png";
    } else if (temp <= 90) {
      pic = "img/hot.png";
    } else {
      pic = "img/burning.png";
    }
    return pic;
  };

  // Gets a picture related to the weather icon summary
  this.getIconPic = function (icon) {
    switch (icon) {
      case "clear-day":
        pic = "img/clear-day.png";
        break;
      case "clear-night":
        pic = "img/clear-night.png";
        break;
      case "rain":
        pic = "img/rain.png";
        break;
      case "snow":
        pic = "img/snow.png";
        break;
      case "sleet":
        pic = "img/sleet.png";
        break;
      case "wind":
        pic = "img/wind.png";
        break;
      case "fog":
        pic = "img/fog.png";
        break;
      case "cloudy":
        pic = "img/cloudy.png";
        break;
      case "partly-cloudy-day.png":
        pic = "img/partly-cloudy-day.png";
        break;
      case "partly-cloudy-night.png":
        pic = "img/partly-cloudy-night.png";
        break;
      default:
        pic = "img/clear-day.png";
        break;
    }
    return pic;
  };
});