export const makeFilterTemplate = ({
  title,
  count = title.length
}) => (
  `<form class="trip-filters" action="#" method="get">
    ${new Array(count).fill(``).map((item, i) => `<div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-${title[i].toLowerCase()}">${title[i]}</label>
    </div>`).join(``)}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);
