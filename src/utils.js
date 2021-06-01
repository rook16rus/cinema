export function getRandomIntFromZero(max)
{
    return Math.ceil(Math.random() * (max + 1)) - 1;
}

export function normalize(num)
{
    return `${num}`.padStart(2, '0')
}