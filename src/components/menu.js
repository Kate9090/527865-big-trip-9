export const makeMenuTemplate = ({
  titles,
}) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${titles.map((title) => `<a class="trip-tabs__btn" href="#">${title}</a>`).join(``)}
  </nav>`
);
