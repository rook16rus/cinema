"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomIntFromZero = getRandomIntFromZero;
exports.normalize = normalize;

function getRandomIntFromZero(max) {
  return Math.ceil(Math.random() * (max + 1)) - 1;
}

function normalize(num) {
  return "".concat(num).padStart(2, '0');
}