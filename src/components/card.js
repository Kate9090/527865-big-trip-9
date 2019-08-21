import {randomCount} from '../data';
const countEvents = 1 + randomCount(2);

export const makeCardTemplate = ({
  city,
  date,
  options,
  price,
  transferType,
}) => (
  `<ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${new Date(date).getDate()}</span>
        <time class="day__date" datetime="2019-03-18">${new Date(date).getMonth()} 19</time>
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
                <time class="event__start-time" datetime="${date}">${new Date(date).getHours()}:${new Date(date).getMinutes()}</time>
                &mdash;
                <time class="event__end-time" datetime="${date + randomCount(24) * randomCount(60) * randomCount(60) * 1000}">${new Date(date).getHours() + 1}:${new Date(date).getMinutes()}</time>
              </p>
              <p class="event__duration">1H 30M</p>
            </div>

            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">${price}</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              ${options.map((option, i) => `<li class="event__offer">
                <span class="event__offer-title">${option.title}</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">${options[i].price}</span>
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

