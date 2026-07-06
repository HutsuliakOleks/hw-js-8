// Завдання 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
// Завдання 3
const cardsToRemove = "Карточка-3";
const cardIndex = cards.indexOf(cardsToRemove);
cards.splice(cardIndex, 1);
console.log(cards);
// Завдання 4
const cardsToInsert = "Карточка-6";
cards.push(cardsToInsert);
console.log(cards);
// Завдання 5
const cardsToUpdate = "Карточка-4";
const cardIndex1 = cards.indexOf(cardsToUpdate);
cards.splice(cardIndex1, cardsToUpdate);
console.log(cards);
