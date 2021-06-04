"use strict";

var btnOpen = document.querySelector('#present-button-open');
var btnClose = document.querySelector('#present-button-close');
var popup = document.querySelector('#present-popup');
var nameField = document.querySelector('.present-form__wrapper:nth-of-type(1)');
var emailField = document.querySelector('.present-form__wrapper:nth-of-type(2)');
var selectPrize = document.getElementById('present_form_present');
var form = document.querySelector('.present-form');

function popupToggle() {
  popup.classList.toggle('visually-hidden');
}

var ERROR_CLASS_NAME = 'error';
var ACTIVE_CLASS_NAME = 'active';
var SELECT_SELECTED = 'selected';

function initializedField(field) {
  var input = field.getElementsByTagName('input')[0];
  var fieldError = field.querySelector('.present-form .error-text');
  reset();

  function clearError() {
    field.classList.remove(ERROR_CLASS_NAME);
    fieldError.innerText = '';
  }

  input.addEventListener('focus', function () {
    field.classList.add(ACTIVE_CLASS_NAME);
  });
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(ACTIVE_CLASS_NAME);
    }
  });
  input.addEventListener('input', function () {
    clearError();
  });

  function reset() {
    input.value = '';
    field.classList.remove(ACTIVE_CLASS_NAME);
    clearError();
  }

  return {
    addError: function addError(errorText) {
      field.classList.add(ERROR_CLASS_NAME);
      fieldError.innerText = errorText;
    },
    getValue: function getValue() {
      return input.value;
    },
    focus: function focus() {
      input.focus();
    },
    reset: reset
  };
}

var nameFieldUtils = initializedField(nameField);
var emailFieldUtils = initializedField(emailField);
btnOpen.addEventListener('click', function () {
  popupToggle();
  nameFieldUtils.focus();
});
selectPrize.addEventListener('change', function () {
  selectPrize.classList.add(SELECT_SELECTED);
});
btnClose.onclick = popupToggle;

function handleSubmit(event) {
  event.preventDefault();
  var nameValue = nameFieldUtils.getValue();
  var emailValue = emailFieldUtils.getValue();

  if (!nameValue) {
    nameFieldUtils.addError('Необходимо указать имя');
    return;
  }

  if (!emailValue) {
    emailFieldUtils.addError('Необходимо указать почту');
    return;
  }

  if (!/^[\w-]{2,16}@[\w]{3,6}\.(ru|com)$/i.test(emailValue)) {
    emailFieldUtils.addError('Не валидный email');
    return;
  }

  if (selectPrize.value === 'none') {
    selectPrize.classList.add(ERROR_CLASS_NAME);
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    prize: selectPrize.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString()).then(function (data) {
    return data.json();
  }).then(function (data) {
    popupToggle();
    nameFieldUtils.reset();
    emailFieldUtils.reset();
  });
}

form.addEventListener('submit', handleSubmit);