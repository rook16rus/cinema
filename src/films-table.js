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

filmHelper();

function filmHelper() {
    let counter = 0;
    for (film of films) {
        if (film.adult)
        {
            if ((counter % 2) == 0)
            {
                tBody.insertAdjacentHTML("beforeend",
                    '<tr class="table__row">' +
                    '<td class="table__col table__col_decorated table__col_color_dark-grey">' +
                    `<div class="table__col_decorated-content">${film.time}</div>` +
                    '</td>' +
                    `<td class="table__col table__col_color_dark-grey">${film.name}</td>` +
                    `<td class="table__col table__col_color_dark-grey">${film.genre}</td>` +
                    '</tr>');
                counter++;
            } else {
                tBody.insertAdjacentHTML("beforeend",
                    '<tr class="table__row">' +
                    '<td class="table__col table__col_decorated table__col_color_grey">' +
                    `<div class="table__col_decorated-content">${film.time}</div>` +
                    '</td>' +
                    `<td class="table__col table__col_color_grey">${film.name}</td>` +
                    `<td class="table__col table__col_color_grey">${film.genre}</td>` +
                    '</tr>');
                counter++;
            }
        }



    }
}

class Film {

}