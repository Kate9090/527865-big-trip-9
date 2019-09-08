import TripController from './controller';
import {getTravelPoint} from './data';

const CARDS_COUNT = 3;

const mainContainer = document.querySelector(`.page-body`);
const tripEventsContainer = mainContainer.querySelector(`.page-body__container .trip-events`);

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

const tripController = new TripController(tripEventsContainer, cardsData);
