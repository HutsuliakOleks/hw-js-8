const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
cards.splice(1, 1, "Карточка-2");
console.log(cards);
const partiallyCards = cards.slice(1, 3);
console.log(partiallyCards);
const cardsToRemove = "Карточка-3";
const cardsToInsert = "Карточка-6";
const cardsToUpdate = "Карточка-4";
const cardsRemoving = cards.indexOf(cardsToRemove, 3);
const cardsInserting = cards.push(cardsToInsert);
const cardsUpdating = cards.splice(1, 2, cardsToUpdate);
console.log(cards);
