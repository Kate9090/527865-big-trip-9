import {AbstractComponent} from './abstract-component';

export class CardDaysItem extends AbstractComponent {
  constructor({
    date,
    monthNamesShort,
  }) {
    super();
    this._date = date;
    this._monthNamesShort = monthNamesShort;
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
