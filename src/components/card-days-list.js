import {AbstractComponent} from './abstract-component';

export class CardDaysList extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<ul class="trip-days">
    </ul>`;
  }
}
