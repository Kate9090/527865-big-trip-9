export const makeInfoTemplate = ({
  startPoint,
  endPoint
}) => (
  `<div class="trip-info__main">
    <h1 class="trip-info__title">${startPoint} &mdash; ... &mdash; ${endPoint}</h1>
  </div>`
);
