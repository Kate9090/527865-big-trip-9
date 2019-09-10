import {CardsHeader} from '../src/components/cards-header';
import {CardDaysItem} from '../src/components/card-days-item';
import {CardDaysList} from '../src/components/card-days-list';
import {CardsList} from '../src/components/cards-list';
import {CardEditForm} from '../src/components/card-edit';
import {Card} from '../src/components/card';
import {Filter} from '../src/components/filter';
import {Menu} from '../src/components/menu';
import {Info} from '../src/components/info';
import {getTravelPoint, getMenu, getFilter, getSchedule} from './data';
import {render, Position} from './utils';

export default class TripController {
  constructor(container, cardsData) {
    this._container = container;
    this._cardsData = cardsData;
    this._info = new Info(getSchedule());
    this._menu = new Menu(getMenu());
    this._filter = new Filter(getFilter());
    this._cardsHeader = new CardsHeader();
    this._cardDaysList = new CardDaysList();

    this._mainContainer = document.querySelector(`.page-body`);
    this._infoContainer = this._mainContainer.querySelector(`.trip-main__trip-info`);
    this._menuContainer = this._mainContainer.querySelector(`.trip-main__trip-controls`);
    this._tripEventsContainer = this._mainContainer.querySelector(`.page-body__container .trip-events`);
  }

  _renderEvent(someCard, someCardsContainer) {
    const cardEditForm = new CardEditForm(cardMock);
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        someCardsContainer.replaceChild(someCard.getElement(), cardEditForm.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    someCard.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        someCardsContainer.replaceChild(cardEditForm.getElement(), someCard.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    cardEditForm.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        someCardsContainer.replaceChild(someCard.getElement(), cardEditForm.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEditForm.getElement().querySelector(`.event__save-btn`)
      .addEventListener(`click`, () => {
        someCardsContainer.replaceChild(someCard.getElement(), cardEditForm.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });
  };

  _renderCard(cardMock, i) {
    const card = new Card(cardMock);
    const cardDaysItem = new CardDaysItem(cardMock);
    const cardsList = new CardsList();

    render(this._tripEventsContainer, cardDaysItem.getElement(), Position.BEFOREEND);

    const tripDaysItem = this._tripEventsContainer.querySelectorAll(`.trip-days__item`)[i];
    render(tripDaysItem, cardsList.getElement(), Position.BEFOREEND);

    const cardsContainer = tripDaysItem.querySelector(`.trip-events__list`);

    render(cardsContainer, card.getElement(), Position.BEFOREEND);

    if (cardMock.countTripPointsPerDay > 1) {
      const cardsMoreContainer = tripDaysItem.querySelector(`.trip-events__list`);
      const cardMore = new Card(cardMock);
      render(cardsMoreContainer, cardMore.getElement(), Position.BEFOREEND);

      this._renderEvent(cardMore, cardsMoreContainer);
    }

    this._renderEvent(card, cardsContainer);
  }

  init(cardsData) {
    render(this._infoContainer, this._info.getElement(), Position.AFTERBEGIN);
    render(this._menuContainer, this._menu.getElement(), Position.BEFOREEND);
    render(this._menuContainer, this._filter.getElement(), Position.BEFOREEND);
    render(this._tripEventsContainer, this._cardsHeader.getElement(), Position.AFTERBEGIN);
    render(this._tripEventsContainer, this._cardDaysList.getElement(), Position.BEFOREEND);

    cardsData.forEach((cardMock, i) => this._renderCard(cardMock, i));
    this._mainContainer.querySelector(`.trip-info__cost-value`).innerHTML = getTravelPoint.totalPrice;
  }
}
