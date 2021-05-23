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

let counter = 0;
for (film of films)
{
    const film = new Film(film);
    if (film.isNotForAdult())
    {
        tBody.innerHTML += filmm.renderFilmTableItem(counter);
        counter++
    }
}
