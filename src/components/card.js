export const makeCardTemplate = ({
  transferType,
  city,
  date,
  day,
  month,
  timeHours,
  timeMinutes,
  price,
  startSlice = Math.floor(Math.random() * 2),
  option,
  optionNew = option.slice(startSlice, startSlice + 2),
  countEvents = 1 + Math.floor(Math.random() * 2)
}) => (
  `<ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${day}</span>
        <time class="day__date" datetime="2019-03-18">${month} 19</time>
      </div>

      <ul class="trip-events__list">
        ${new Array(countEvents).fill(``).map(() => `<li class="trip-events__item">
          <div class="event">
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${transferType}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${transferType} to ${city}</h3>

            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${date}">${timeHours}:${timeMinutes}</time>
                &mdash;
                <time class="event__end-time" datetime="${date + Math.floor(Math.random() * 1) * 24 * 60 * 60 * 1000}">${timeHours + 1}:${timeMinutes}</time>
              </p>
              <p class="event__duration">1H 30M</p>
            </div>

            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">${price}</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              ${new Array(countEvents).fill(``).map((item, i) => `<li class="event__offer">
                <span class="event__offer-title">${optionNew[i]}</span>
              </li>`).join(``)}
            </ul>

            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
        </li>`).join(``)}
      </ul>
    </li>
  </ul>`
);

