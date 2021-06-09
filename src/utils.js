export function getRandomIntFromZero(max)
{
    return Math.ceil(Math.random() * (max + 1)) - 1;
}

export function normalize(num)
{
    return `${num}`.padStart(2, '0')
}

export const apiHeaders =
    {
        'accept': 'application/json',
        'X-API-KEY': '0c419b9f-60cd-4722-ac9b-88da80bab978',
    };

export function kinopoiskapiunofficialRequest(url)
{
    return fetch(url,
        {
            headers: apiHeaders,
            cors: 'no-cors'
        });
}

export function filmDetailsRequest(id)
{
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`)
}