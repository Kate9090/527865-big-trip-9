import {AbstractComponent} from './abstract-component';

export class Card extends AbstractComponent {
  constructor({
    city,
    countTripPointsPerDay,
    date,
    durationOfTripPoint,
    monthNamesShort,
    options,
    price,
    transferType,
  }) {
    super();
    this._city = city;
    this._countTripPointsPerDay = countTripPointsPerDay;
    this._date = date;
    this._durationOfTripPoint = durationOfTripPoint;
    this._monthNamesShort = monthNamesShort;
    this._options = options;
    this._price = price;
    this._transferType = transferType;
  }

  getTemplate() {
    return `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${this._transferType}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${this._transferType} to ${this._city}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${this._date}">${this._date.getHours()}:${this._date.getMinutes()}</time>
            &mdash;
            <time class="event__end-time" datetime="${this._date + this._durationOfTripPoint}">${this._date.getHours() + 1}:${this._date.getMinutes()}</time>
          </p>
          <p class="event__duration">1H 30M</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${this._price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${this._options.map((option) => `<li class="event__offer">
            <span class="event__offer-title">${option.title}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${option.price}</span>
          </li>`).join(``)}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
  }
}
