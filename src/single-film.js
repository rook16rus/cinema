import * as util from "./utils"

const likes = document.getElementById('single_film_likes');
if (likes !== null)
{
    const searchParams = new URLSearchParams(location.search);
    const stars = document.querySelectorAll('.film-rate__star');

    const  filmId = searchParams.get('id');

    const fetchKinopoiskFilmData = async () =>
    {
        const answer = await util.filmDetailsRequest(filmId);
        const { data: filmData } = await  answer.json();

        const header = document.getElementById('single_film_header');
        header.textContent = filmData.nameRu;

        const description = document.getElementById('single_film_desc');
        description.textContent =  filmData.description;

        const posterImage = document.getElementById('single_film_poster');
        posterImage.src = filmData.posterUrl;

        const date = document.getElementById('single_film_date');
        date.textContent = filmData.premiereRu;
    };

    const fetchFilmMeta = async () =>
    {
        const answer = await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}`);
        const { body } = await answer.json();

        const views = document.getElementById('single_film_views');
        views.textContent = `${body.views} Views`;

        likes.textContent = `${body.likes} Likes`;

        const rateNumber = document.getElementById('single_film_rate');
        const rating = body.ratings.reduce((a, b) => +a + +b, 0) / body.ratings.length;
        const intRating = Math.round(rating);
        rateNumber.textContent = Math.floor(rating * 10) / 10;

        for (let i = 0; i < stars.length; i++)
        {
            if (i >= intRating) break;

            const star = stars[i];
            star.classList.add('film-rate__star_selected')
        }

    };

    const likeIcon = document.getElementById('like-icon');
    const FILM_KEY = `film-${filmId}`;
    const liked = localStorage.getItem(FILM_KEY);
    if (liked !== null)
    {
        likeIcon.classList.add('like-icon-liked');
    }
    localStorage.getItem(FILM_KEY);
    likeIcon.addEventListener('click', async () =>
    {
        if (!likeIcon.classList.contains('like-icon-liked'))
        {
            localStorage.setItem(FILM_KEY, true);
            const likesCount = parseInt(likes.textContent, 10) + 1;

            likes.innerText = likesCount + ' Likes';
            likeIcon.classList.add('like-icon-liked');
            likes.classList.add('like-icon-liked');

            const answer = await  fetch(
                `http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/like`,
                {
                    method: 'POST',
                    headers:
                        {
                            'Content-Type': 'application/json'
                        }
                }
            )
        }

    });

    $('.film-rate__star-list').on('click', '.film-rate__star', async function ()
    {
        console.log('hh')
        await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`,
            {
                method: 'POST',
                headers:
                    {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify({rating: +this.dataset.value})
            });
    });


    fetchKinopoiskFilmData();
    fetchFilmMeta();
}
