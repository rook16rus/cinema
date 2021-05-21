const btnOpen = document.querySelector('#present-button-open');
const btnClose = document.querySelector('#present-button-close')
const popup = document.querySelector('#present-popup');

function popupToggle()
{
    popup.classList.toggle('visually-hidden');
}

btnOpen.onclick = popupToggle;
btnClose.onclick = popupToggle;