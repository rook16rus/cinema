const filmsCatalog = document.getElementById('films_catalog_list');
filmsCatalog.innerHTML = '';

const apiHeaders =
    {
        'accept': 'application/json',
        'X-API-KEY': '0c419b9f-60cd-4722-ac9b-88da80bab978',
    };

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1',
    {
        headers:
            {
                ...apiHeaders
            },
         cors: 'no-cors'
    })
    .then(data => data.json())
    .then(data =>
    {
        data.films.forEach((film) =>
        {
            const id = `films-catalog__item-text-${film.filmId}`;
            filmsCatalog.innerHTML +=
                `
                <li class="films-catalog__item">
                <a class="films-catalog__item-link" href="#">
                    <article class="films-catalog__item-article">
                        <span class="visually-hidden" id="film_description">Обложка фильма</span>
                        <div class="films-catalog__item-content">
                            <h3 class="films-catalog__item-title" title="Фильм Выживший">${film.nameRu}</h3>
                            <p class="films-catalog__item-text" id="${id}">
                                
                            </p>
                        </div>
                        <img class="films-catalog__item-photo" src="${film.posterUrlPreview}" width="284" height="284"
                             aria-labelledby="film_description" alt="">
                    </article>
                </a>
            </li>
                `
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`,
                {
                    headers:
                        {
                            ...apiHeaders
                        },
                    cors: 'no-cors'
                })
                .then(data => data.json())
                .then(({ data: { description } }) =>
                {
                    const desc = document.getElementById(id);
                    desc.innerText = description;

                    if (!description)
                    {
                        const root = desc.parentNode.parentNode.parentNode.parentNode;

                        filmsCatalog.removeChild(root);
                    }
                })
        });
    });