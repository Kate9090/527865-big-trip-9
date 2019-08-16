export const getTravelPoint = () => ({
  transferType: [
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `drive`,
    `flight`,
  ][Math.floor(Math.random() * 6)],
  city: [`Tokio`,`Kioto`,`Singapur`,`Seul`,`Hanoy`][Math.floor(Math.random() * 5)],
  picture: `http://picsum.photos/300/150?r=${Math.random()}`,
  description: new Set(
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
  ),
  date: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  timeHours: Math.floor(Math.random() * 23),
  timeMinutes: Math.floor(Math.random() * 59),
  price: Math.floor(Math.random() * 1000),
  option: [
    `Add luggage +10 €`,
    `Switch to comfort class +150 €`,
    `Add meal +2 €`,
    `Choose seats +9 €`
  ][Math.floor(Math.random() * 4)],
  // dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  // repeatingDays: {
  //   'mo': false,
  //   'tu': false,
  //   'we': Boolean(Math.round(Math.random())),
  //   'th': false,
  //   'fr': false,
  //   'sa': false,
  //   'su': false
  // },
  // tags: new Set(`homework`, `theory`, `practice`, `intensive`, `keks`),
  // color: [`black`, `yellow`, `blue`, `green`, `pink`],
  // isFavorite: Boolean(Math.round(Math.random())),
  // isArchive: Boolean(Math.round(Math.random())),
  // isOverdue: Boolean(Math.round(Math.random())),
  // isToday: Boolean(Math.round(Math.random())),
  // isRepeating: Boolean(Math.round(Math.random())),
  // isTags: Boolean(Math.round(Math.random()))
});

// const getAllTasks = (tasks) => {
//   return tasks.length;
// };

// const getCountType = (tasks, filterKey) => {
//   return tasks.filter((el) => el[filterKey]).length;
// };

// export const getFilter = (tasks) => ([
//   {
//     title: `All`,
//     get count() {
//       return getAllTasks(tasks);
//     },
//   },
//   {
//     title: `Overdue`,
//     get count() {
//       return getCountType(tasks, this.flagName);
//     },
//     flagName: `isOverdue`,
//   },
//   {
//     title: `Today`,
//     get count() {

