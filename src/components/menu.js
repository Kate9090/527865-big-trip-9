export const makeMenuTemplate = ({
  title,
  count = title.length
}) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${new Array(count).fill(``).map((item, i) => `<a class="trip-tabs__btn" href="#">${title[i]}</a>`
    ).join(``)}
  </nav>`
);
