const btnOpen = document.querySelector('#present-button-open');
const btnClose = document.querySelector('#present-button-close');
const popup = document.querySelector('#present-popup');
const nameField = document.querySelector('.present-form__wrapper:nth-of-type(1)');
const emailField = document.querySelector('.present-form__wrapper:nth-of-type(2)');
const selectPrize = document.getElementById('present_form_present');
const form = document.querySelector('.present-form');

function popupToggle()
{
    popup.classList.toggle('visually-hidden');
}

const ERROR_CLASS_NAME = 'error';
const ACTIVE_CLASS_NAME = 'active';
const SELECT_SELECTED = 'selected';

function initializedField(field)
{
    const input = field.getElementsByTagName('input')[0];
    console.log(input);
    const fieldError = field.querySelector('.present-form .error-text');

    input.value = '';
    field.classList.remove(ERROR_CLASS_NAME);
    field.classList.remove(ACTIVE_CLASS_NAME);
    fieldError.innerText = '';

    input.addEventListener('focus', function ()
    {
        field.classList.add(ACTIVE_CLASS_NAME);
    });


    input.addEventListener('blur', () =>
    {
        if (!input.value)
        {
            field.classList.remove(ACTIVE_CLASS_NAME)
        }
    });

    return {
        getValue()
        {
            return input.value;
        },
        focus()
        {
            input.focus();
        }
    }
}

const nameFieldUtils = initializedField(nameField);
const emailFieldUtils  = initializedField(emailField);

btnOpen.addEventListener('click', () =>
{
    popupToggle();
    nameFieldUtils.focus()
});
selectPrize.addEventListener('change', () =>
{
   selectPrize.classList.add(SELECT_SELECTED);
});
btnClose.onclick = popupToggle;

function handleSubmit(event)
{
    event.preventDefault();
    const data =
        {
            name: nameFieldUtils.getValue(),
            email: emailFieldUtils.getValue(),
        };

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString());
}

form.addEventListener('submit', handleSubmit);