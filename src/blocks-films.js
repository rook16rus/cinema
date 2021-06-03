const filmsCatalog = document.getElementById('films_catalog_list');
filmsCatalog.innerHTML = '';

const apiHeaders =
    {
        'accept': 'application/json',
        'X-API-KEY': '0c419b9f-60cd-4722-ac9b-88da80bab978',
    };

const kinopoiskapiunofficialRequest = (url) =>
{
    return fetch(url,
        {
            headers:
                {
                    ...apiHeaders
                },
            cors: 'no-cors'
        });
};

const topFilmsRequest = () =>
{
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1')
};

const filmDetailsRequest = (id ) =>
{
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`)
};

function renderFilmBlock (posterUrlPreview, filmTitle)
{
    const li = document.createElement('li');
    li.classList.add('films-catalog__item');

    const link = document.createElement('a');
    link.classList.add('films-catalog__item-link');
    link.href = 'film.html';

    const  article = document.createElement('article');
    article.classList.add('films-catalog__item-article');

    const span = document.createElement('span');
    span.classList.add('visually-hidden');
    span.id = 'film_description';
    span.textContent = 'Обложка фильма';

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('films-catalog__item-content');

    const title = document.createElement('h3');
    title.classList.add('films-catalog__item-title');
    title.title = 'Фильм выживший';
    title.textContent = filmTitle;

    const desc = document.createElement('p');
    desc.classList.add('films-catalog__item-text');

    const img = document.createElement('img');
    img.classList.add('films-catalog__item-photo');
    img.src = posterUrlPreview;
    img.width = 284;
    img.height = 284;
    img.setAttribute('aria-labelldeby', 'film_description');
    img.alt = '';

    li.append(link);
    link.append(article);
    article.append(span, textWrapper, img);
    textWrapper.append(title, desc);

    return [li, desc];
}

const fetchBlockFilms = async () =>
{
    const result = await topFilmsRequest();
    const data = await result.json();

    const requests = [];
    const filmBlocksMap = new Map();

    data.films.forEach(async (film) =>
    {
        const [filmBlock, desc] = renderFilmBlock(film.posterUrlPreview, film.nameRu);
        filmBlocksMap.set(film.filmId, filmBlock);

        requests.push(new Promise(async (resolve, reject) =>
        {
            const detailResult = await filmDetailsRequest(film.filmId);
            const detailsData = await detailResult.json();

            const description = detailsData.data.description;

            if (!description)
            {
                filmBlocksMap.delete(film.filmId);
            } else
            {
                desc.textContent = description;
            }

            resolve();
        }));

    });

    await Promise.all(requests);

    const elements = [...filmBlocksMap.values()].slice(0, 9);

    filmsCatalog.append(...elements);
};

fetchBlockFilms();
