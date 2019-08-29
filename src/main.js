import {CardsHeader} from '../src/components/cards-header';
import {CardDaysItem} from '../src/components/card-days-item';
import {CardDaysList} from '../src/components/card-days-list';
import {CardsList} from '../src/components/cards-list';
import {CardEditForm} from '../src/components/card-edit';
import {Card} from '../src/components/card';
import {Filter} from '../src/components/filter';
import {Menu} from '../src/components/menu';
import {Info} from '../src/components/info';
import {getTravelPoint, getMenu, getFilter, getSchedule, randomBoolean} from './data';
import {render, Position, removeElement} from './utils';

const CARDS_COUNT = 3;

const makeData = (createData, count = CARDS_COUNT) => {
  let newArr = [];
  newArr = new Array(count).fill(``).map(createData).sort((a, b) => a.date - b.date);
  return newArr;
};

const cardsData = makeData(getTravelPoint);

const sumArrayItems = (array) => {
  return array.reduce((sum, current) => sum + current, 0);
};

const calculateTotalPrice = (cards = cardsData) => {
  let optionsPrice = 0;
  let totalPrice = 0;
  totalPrice = sumArrayItems(cards.map((it) => it.price * it.countTripPointsPerDay));

  optionsPrice = sumArrayItems(cards
    .map((it) => it.countTripPointsPerDay * sumArrayItems(it.options
        .map((option) => option.price)
      )
    )
  );

  totalPrice = totalPrice + optionsPrice;
  return totalPrice;
};

getTravelPoint.totalPrice = calculateTotalPrice();

const mainContainer = document.querySelector(`.page-body`);
const infoContainer = mainContainer.querySelector(`.trip-main__trip-info`);
const menuContainer = mainContainer.querySelector(`.trip-main__trip-controls`);
const tripEventsContainer = mainContainer.querySelector(`.page-body__container .trip-events`);

const info = new Info(getSchedule());
const menu = new Menu(getMenu());
const filter = new Filter(getFilter());
const cardsHeader = new CardsHeader();
const cardDaysList = new CardDaysList();

const renderCard = (cardMock, i) => {
  const card = new Card(cardMock);
  const cardEditForm = new CardEditForm(cardMock);

  const cardDaysItem = new CardDaysItem(cardMock);
  const cardsList = new CardsList();

  render(tripEventsContainer, cardDaysItem.getElement(), Position.BEFOREEND);

  const tripDaysItem = tripEventsContainer.querySelectorAll(`.trip-days__item`)[i]
  render(tripDaysItem, cardsList.getElement(), Position.BEFOREEND);

  const cardsContainer = tripDaysItem.querySelector(`.trip-events__list`)
  
  render(cardsContainer, card.getElement(), Position.BEFOREEND);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      cardsContainer.replaceChild(card.getElement(), cardEditForm.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  }

  card.getElement().querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      cardsContainer.replaceChild(cardEditForm.getElement(), card.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  cardEditForm.getElement().querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      cardsContainer.replaceChild(card.getElement(), cardEditForm.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  cardEditForm.getElement().querySelector(`.event__save-btn`)
    .addEventListener(`click`, () => {
      cardsContainer.replaceChild(card.getElement(), cardEditForm.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
}

render(infoContainer, info.getElement(), Position.AFTERBEGIN);
render(menuContainer, menu.getElement(), Position.BEFOREEND);
render(menuContainer, filter.getElement(), Position.BEFOREEND);
render(tripEventsContainer, cardsHeader.getElement(), Position.AFTERBEGIN);
render(tripEventsContainer, cardDaysList.getElement(), Position.BEFOREEND);

cardsData.forEach((cardMock, i) => renderCard(cardMock, i));
mainContainer.querySelector(`.trip-info__cost-value`).innerHTML = getTravelPoint.totalPrice;
