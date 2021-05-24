import {toMinutes, toHour, getRandomToMax} from "./utils";

export class Film {
    constructor(filmData)
    {
        this.data = filmData;
        this.time = `${toHour(getRandomToMax(24))}:${toMinutes(getRandomToMax(6))}`
    }

    getTime()
    {
        return this.time;
    }

    getName()
    {
        return this.data.name;
    }

    getGenre()
    {
        return this.data.genre;
    }

    isNotForAdult()
    {
        return !this.data.adult
    }

    renderFilmTableItem(counter)
    {
        const even = (counter % 2) === 0;
        if (even)
        {
            return '<tr class="table__row">' +
                '<td class="table__col table__col_decorated table__col_color_dark-grey">' +
                `<div class="table__col_decorated-content">${this.getTime()}</div>` +
                '</td>' +
                `<td class="table__col table__col_color_dark-grey">${this.getName()}</td>` +
                `<td class="table__col table__col_color_dark-grey">${this.getGenre()}</td>` +
                '</tr>';
        }
        return '<tr class="table__row">' +
            '<td class="table__col table__col_decorated table__col_color_grey">' +
            `<div class="table__col_decorated-content">${this.getTime()}</div>` +
            '</td>' +
            `<td class="table__col table__col_color_grey">${this.getName()}</td>` +
            `<td class="table__col table__col_color_grey">${this.getGenre()}</td>` +
            '</tr>';
    };
}