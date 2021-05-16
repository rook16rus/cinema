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

const filmsRow = document.querySelectorAll('.table__tbody .table__row');

filmHelper(filmsRow);

function filmHelper(tableRow) {
    let counter = 0;
    for (film of films) {
        if (film.adult === true)
        {
            tableRow[counter].children[0].children[0].innerText = film.time;
            tableRow[counter].children[1].innerHTML = film.name;
            tableRow[counter].children[2].innerHTML = film.genre;
            counter++;
        } else
        {
            tableRow[counter].remove();
            counter++;
        }
    }
}