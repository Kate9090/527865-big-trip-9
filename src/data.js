export const randomCount = (limit) => Math.floor(Math.random() * limit);
const randomBoolean = () => Boolean(Math.round(Math.random()));

export const getTravelPoint = () => ({
  transferType: [
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `drive`,
    `flight`,
  ][Math.floor(Math.random() * 6)],
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
  ][Math.floor(Math.random() * 9)],
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
  city: [`Tokyo`,`Kyoto`,`Singapore`,`Seul`,`Hanoi`][Math.floor(Math.random() * 5)],
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
  date: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  day: 1 + Math.floor(Math.random() * 30),
  month: `August`,
  timeHours: Math.floor(Math.random() * 23),
  timeMinutes: Math.floor(Math.random() * 59),
  price: Math.floor(Math.random() * 1000),
  option: [
    `Add luggage +10 €`,
    `Switch to comfort class +150 €`,
    `Add meal +2 €`,
    `Choose seats +9 €`
  ],
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
  startPoint: [`Tokyo`,`Kyoto`,`Singapore`,`Seul`,`Hanoi`][Math.floor(Math.random() * 5)],
  endPoint: [`Tokyo`,`Kyoto`,`Singapore`,`Seul`,`Hanoi`][Math.floor(Math.random() * 5)],
})
