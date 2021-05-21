const films =
    [
         {
            time: '10:00',
            name: 'Человек паук',
            genre: 'Фантастика, боевик, приключения',
            adult: true
        },

        {
            time: '12:00',
            name: 'Собачья жизнь 2',
            genre: 'Фэнтэзи, драма, комедия',
            adult: true
        },

        {
            time: '14:00',
            name: 'История игрушек 4',
            genre: 'Мультфильм, фэнтэзи, комедия',
        },

        {
            time: '16:00',
            name: 'Люди в чёрном: Интэрнэшнл',
            genre: 'Фантастика, боевик, комедия'
        }
    ];

const tBody = document.querySelector('.table__tbody');

const filmHelper =
    {
        getTime()
        {
            return this.time;
        },
        getName()
        {
            return this.name;
        },
        getGenre()
        {
            return this.genre;
        }
    };

const renderFilmTableItem = function(film, counter)
{
    if ((counter % 2) == 0)
    {
    return '<tr class="table__row">' +
        '<td class="table__col table__col_decorated table__col_color_dark-grey">' +
        `<div class="table__col_decorated-content">${filmHelper.getTime.apply(film)}</div>` +
        '</td>' +
        `<td class="table__col table__col_color_dark-grey">${filmHelper.getName.apply(film)}</td>` +
        `<td class="table__col table__col_color_dark-grey">${filmHelper.getGenre.apply(film)}</td>` +
        '</tr>';
    } else
    {
        return '<tr class="table__row">' +
            '<td class="table__col table__col_decorated table__col_color_grey">' +
            `<div class="table__col_decorated-content">${filmHelper.getTime.apply(film)}</div>` +
            '</td>' +
            `<td class="table__col table__col_color_grey">${filmHelper.getName.apply(film)}</td>` +
            `<td class="table__col table__col_color_grey">${filmHelper.getGenre.apply(film)}</td>` +
            '</tr>';
    }
};

let counter = 0;
for (film of films)
{
    if (film.adult)
    {
        tBody.innerHTML += renderFilmTableItem(film, counter);
        counter++
    }
}
