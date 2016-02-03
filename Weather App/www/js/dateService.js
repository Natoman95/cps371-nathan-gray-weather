app.service("dateService", function () {
  // Gets the date
  this.getDate = function (offset) {
    // Offsets the date to get the dates of the next few days
    var currentDate = new Date(new Date().getTime() + (offset) * 24 * 60 * 60 * 1000);
    var date =  (currentDate.getMonth()+1) + "-"
            + currentDate.getDate() + "-"
            + currentDate.getFullYear();
    return date;
  }

  // Gets the day
  this.getDay = function (offset) {
    var currentDate = new Date();
    var dayNumber = (currentDate.getDay() + offset) % 7;
    var day;
    switch (dayNumber) {
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
          break;
    }
    return day;
  }
});
