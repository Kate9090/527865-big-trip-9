export const randomCount = (limit) => Math.floor(Math.random() * limit);
export const randomBoolean = () => Boolean(Math.round(Math.random()));
const startOptionSlice = randomCount(1);

export const getTravelPoint = () => ({
  transferType: [
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `drive`,
    `flight`,
  ][randomCount(6)],
  point: [
    `Check`,
    `Sightseeing`,
    `Restaurant`,
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `drive`,
    `flight`,
  ][randomCount(9)],
  transfer: [
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `drive`,
    `flight`,
  ],
  activity: [
    `Check-in`,
    `Sightseeing`,
    `Restaurant`
  ],
  city: [`Tokyo`,`Kyoto`,`Singapore`,`Seul`,`Hanoi`][randomCount(5)],
  pictures: new Set([
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`
  ]),
  description: new Set([
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ]),
  date: Date.now() + 1 + randomCount(7) * 24 * 60 * 60 * 1000,
  day: 1 + randomCount(30),
  month: `August`,
  timeHours: randomCount(23),
  timeMinutes: randomCount(59),
  price: randomCount(1000),
  option: [
    `Add luggage +10 €`,
    `Switch to comfort class +150 €`,
    `Add meal +2 €`,
    `Choose seats +9 €`
  ],
  options: [
    {
      title: `Add luggage`,
      price: `10`,
      isActive: randomBoolean(),
    },
    {
      title: `Switch to comfort class`,
      price: `150`,
      isActive: randomBoolean(),
    },
    {
      title: `Add meal`,
      price: `2`,
      isActive: randomBoolean(),
    },
    {
      title: `Choose seat`,
      price: `9`,
      isActive: randomBoolean(),
    },
  ].slice(startOptionSlice, 2 * startOptionSlice + 1),
  isFuture() {
    if(date > Date.now()) {
      return true
    }
    return false
  },
  isPast() {
    if(date < Date.now()) {
      return true
    }
    return false
  },
});

export const getMenu = () => ({
  title: [
    `Table`,
    `Stats`
  ],
})

export const getFilter = () => ({
  title: [
    `Everything`,
    `Future`,
    `Past`,
  ]
})

export const getSchedule = () => ({
  startPoint: [`Tokyo`,`Kyoto`,`Singapore`,`Seul`,`Hanoi`][randomCount(5)],
  endPoint: [`Tokyo`,`Kyoto`,`Singapore`,`Seul`,`Hanoi`][randomCount(5)],
})
