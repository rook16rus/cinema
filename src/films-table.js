const films =
    [
        {
            time: '10:00',
            name: 'Человек паук',
            genre: 'Фантастика, боевик, приключения'
        },

        {
            time: '12:00',
            name: 'Собачья жизнь 2',
            genre: 'Фэнтэзи, драма, комедия'
        },

        {
            time: '14:00',
            name: 'История игрушек 4',
            genre: 'Мультфильм, фэнтэзи, комедия'
        },

        {
            time: '16:00',
            name: 'Люди в чёрном: Интэрнэшнл',
            genre: 'Фантастика, боевик, комедия'
        }
    ];

const tableRow = document.querySelectorAll('.table__tbody .table__row');


for (let i = 0; i < films.length; i++) {
    tableRow[i].children[0].children[0].innerText = films[i].time;
    tableRow[i].children[1].innerHTML = films[i].name;
    tableRow[i].children[2].innerHTML = films[i].genre;
}

/*
const genre = ['фантастика', 'боевик', 'приключения', 'фэнтэзи', 'драма', 'комедия', 'мультфильм'];
const films = ['человек-паук', 'собачья жизнь 2', 'история игрушек 4', 'люди в черном: интернешнл'];
*/

