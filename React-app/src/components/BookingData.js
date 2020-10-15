var BookingData = (function () {
  var getName = function (name) {
    return localStorage.getItem("name");
  };

  var setName = function (name) {
    localStorage.setItem("name", name);
  };

  var getEmail = function (email) {
    return localStorage.getItem("email");
  };

  var setEmail = function (email) {
    localStorage.setItem("email", email);
  };

  var getMovieName = function (movieName) {
    return localStorage.getItem("movieName");
  };

  var setMovieName = function (movieName) {
    localStorage.setItem("movieName", movieName);
  };

  var getDate = function (date) {
    return localStorage.getItem("date");
  };

  var setDate = function (date) {
    localStorage.setItem("date", date);
  };
  var getTime = function (time) {
    return localStorage.getItem("time");
  };

  var setTime = function (time) {
    localStorage.setItem("time", time);
  };
  var getTheater = function (theater) {
    return localStorage.getItem("theater");
  };

  var setTheater = function (theater) {
    localStorage.setItem("theater", theater);
  };

  var getSelectedSeats = function (seat) {
    return localStorage.getItem("seats");
  };

  var setSelectedSeats = function (seats) {
    localStorage.setItem("seats", seats);
  };
  return {
    getName: getName,
    setName: setName,
    getEmail: getEmail,
    setEmail: setEmail,
    getDate: getDate,
    setDate: setDate,
    getTime: getTime,
    setTime: setTime,
    getTheater: getTheater,
    setTheater: setTheater,
    getSelectedSeats: getSelectedSeats,
    setSelectedSeats: setSelectedSeats,
    getMovieName: getMovieName,
    setMovieName: setMovieName,
  };
})();

export default BookingData;
