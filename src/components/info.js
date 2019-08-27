export const makeInfoTemplate = ({
  endPoint,
  startPoint,
}) => (
  `<div class="trip-info__main">
    <h1 class="trip-info__title">${startPoint} &mdash; ... &mdash; ${endPoint}</h1>
  </div>`
);
