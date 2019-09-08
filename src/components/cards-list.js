import {AbstractComponent} from './abstract-component';

export class CardsList extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<ul class="trip-events__list"></ul>`;
  }
}
