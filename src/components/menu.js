import {createElement} from '../utils';

export class Menu {
  constructor({
    titles,
  }) {
    this._titles = titles;
  }
  
  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${titles.map((title) => `<a class="trip-tabs__btn" href="#">${title}</a>`).join(``)}
    </nav>`;
  }
}
