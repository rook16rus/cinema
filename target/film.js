"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Film = void 0;

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this.data = filmData;
    this.time = "".concat((0, _utils.normalize)((0, _utils.getRandomIntFromZero)(14) + 9), ":").concat((0, _utils.normalize)((0, _utils.getRandomIntFromZero)(11) * 5));
  }

  _createClass(Film, [{
    key: "getTime",
    value: function getTime() {
      return this.time;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.data.name;
    }
  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.data.genre;
    }
  }, {
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem(counter) {
      var even = counter % 2 === 0;

      if (even) {
        return '<tr class="table__row">' + '<td class="table__col table__col_decorated table__col_color_dark-grey">' + "<div class=\"table__col_decorated-content\">".concat(this.getTime(), "</div>") + '</td>' + "<td class=\"table__col table__col_color_dark-grey\">".concat(this.getName(), "</td>") + "<td class=\"table__col table__col_color_dark-grey\">".concat(this.getGenre(), "</td>") + '</tr>';
      }

      return '<tr class="table__row">' + '<td class="table__col table__col_decorated table__col_color_grey">' + "<div class=\"table__col_decorated-content\">".concat(this.getTime(), "</div>") + '</td>' + "<td class=\"table__col table__col_color_grey\">".concat(this.getName(), "</td>") + "<td class=\"table__col table__col_color_grey\">".concat(this.getGenre(), "</td>") + '</tr>';
    }
  }]);

  return Film;
}();

exports.Film = Film;