import {makeCardEditTemplate} from '../src/components/card-edit';
import {makeCardTemplate} from '../src/components/card';
import {makeFilterTemplate} from '../src/components/filter';
import {makeMenuTemplate} from '../src/components/menu';
import {makeInfoTemplate} from '../src/components/info';
import {getTravelPoint, getMenu, getFilter, getSchedule} from './data';

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

const renderComponent = (parent, child, place) => {
  parent.insertAdjacentHTML(place, child);
};
const mainContainer = document.querySelector(`.page-body`);
const infoContainer = mainContainer.querySelector(`.trip-main__trip-info`);
const menuContainer = mainContainer.querySelector(`.trip-main__trip-controls`);
const cardEditContainer = mainContainer.querySelector(`.page-body__container .trip-events`);

const renderMockComponents = () => {
  renderComponent(infoContainer, makeInfoTemplate(getSchedule()), `afterbegin`);
  renderComponent(menuContainer, makeMenuTemplate(getMenu()),`beforeend`);
  renderComponent(menuContainer, makeFilterTemplate(getFilter()),`beforeend`);
  renderComponent(cardEditContainer, makeCardEditTemplate(getTravelPoint()),`afterbegin`);

  const tripArray = new Array(CARDS_COUNT).fill(``).map((item, i)=>
    makeCardTemplate(cardsData[i])
  ).join(``)

  renderComponent(cardEditContainer, tripArray,`beforeend`);

  mainContainer.querySelector(`.trip-info__cost-value`).innerHTML = getTravelPoint.totalPrice;
};

renderMockComponents();
