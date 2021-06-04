"use strict";

var _film = require("./film");

var films = [{
  time: '10:00',
  name: 'Человек паук',
  genre: 'Фантастика, боевик, приключения',
  adult: true
}, {
  time: '12:00',
  name: 'Собачья жизнь 2',
  genre: 'Фэнтэзи, драма, комедия',
  adult: true
}, {
  time: '14:00',
  name: 'История игрушек 4',
  genre: 'Мультфильм, фэнтэзи, комедия'
}, {
  time: '16:00',
  name: 'Люди в чёрном: Интэрнэшнл',
  genre: 'Фантастика, боевик, комедия'
}];
var tBody = document.querySelector('.table__tbody');
var counter = 0;
var iteration;

for (var _i = 0, _films = films; _i < _films.length; _i++) {
  iteration = _films[_i];
  var film = new _film.Film(iteration);

  if (film.isNotForAdult()) {
    tBody.innerHTML += film.renderFilmTableItem(counter);
    counter++;
  }
}