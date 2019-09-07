import {createElement} from '../utils';

export class Filter {
  constructor({
    titles,
  }) {
    this._titles = titles;
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
    return `<form class="trip-filters" action="#" method="get">
      ${this._titles.map((title) => `<div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-${title.toLowerCase()}">${title}</label>
      </div>`).join(``)}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
  }
}
