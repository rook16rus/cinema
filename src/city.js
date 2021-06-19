const SYPEX_URL = 'http://api.sypexgeo.net/';
const GLAVPUNKT_URL = 'https://glavpunkt.ru/api/get_rf_cities';
let selectedCity, cities;

function getRequest(url, callback)
{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if (xhr.status != 200)
        {
            return xhr.statusText;
        } else
        {
            if (xhr.readyState == 4)
            {
                callback.call(xhr.responseText);
            }
        }
    }
}

function setCity()
{
    let res = $.parseJSON(this);
    selectedCity = res.city.name_ru;
    $('#city_link').html(selectedCity);
}

function setCities()
{
    cities = $.parseJSON(this);
    getCityList();
}

function getCityList()
{
    let val = $('#city_input').val(),
        counter = 0,
        html = '<ul>';
    for (let i = 0; i < cities.length; i++)
    {
        if (cities[i].name.toLowerCase().indexOf(val.toLowerCase()) >= 0 && counter < 5)
        {
            html += '<li>' + cities[i].name + '</li>';
            counter++
        }
    }
    html += '</ul>';
    $('#search_result').html(html);
}

jQuery(document).ready(($) =>
{
    getRequest(SYPEX_URL,setCity);

    $(document).on('keyup', '#city_input', function ()
    {
        let val = $(this).val();
        if (!cities) {
            getRequest(GLAVPUNKT_URL, setCities);
        }
        else {
            getCityList();
        }
    })
});

$('#city_link').click(function ()
{
    $('#city_popup').removeClass('visually-hidden');
});

$('.city-form + .fancybox-close-small').click(function ()
{
    $('#city_popup').addClass('visually-hidden');
})