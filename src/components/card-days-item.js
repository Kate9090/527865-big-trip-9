import {createElement} from '../utils';

export class CardDaysItem {
  constructor({
    date,
    monthNamesShort,
  }) {
    this._date = date;
    this._monthNamesShort = monthNamesShort;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${this._date.getDate()}</span>
        <time class="day__date" datetime="2019-03-18">${this._monthNamesShort[this._date.getMonth()]} 19</time>
      </div>
    </li>`;
  }
}
