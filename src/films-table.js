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
    for (let i = 0; i < films.length; i++) {
        if (films[i].adult === true)
        {
            tableRow[i].children[0].children[0].innerText = films[i].time;
            tableRow[i].children[1].innerHTML = films[i].name;
            tableRow[i].children[2].innerHTML = films[i].genre;
        } else
        {
            tableRow[i].remove();
        }
    }
}