export interface Card {
  id: string;
  description: string;
  img: string;
}
const uniqueCards: Card[] = [
  {
    img: "01-alan-emery-SYzUF6XcWBY-unsplash.jpg",
    description: "card 1",
    id: "card1",
  },
  {
    img: "02-andrew-ly-iUA1cea8QiY-unsplash.jpg",
    description: "card 2",
    id: "card2",
  },
  {
    img: "03-christopher-alvarenga-3osGqRRtQBE-unsplash.jpg",
    description: "card 3",
    id: "car32",
  },
  {
    img: "04-imelda-A0JYmNOUPy8-unsplash.jpg",
    description: "card 4",
    id: "card4",
  },
  {
    img: "05-olivier-mary-nT6o16ar52w-unsplash.jpg",
    description: "card 5",
    id: "card5",
  },
  {
    img: "06-elie-khoury-GidYc-pS9sM-unsplash.jpg",
    description: "card 6",
    id: "card6",
  },
  {
    img: "07-mike-doherty-iyVSCp0ZUj0-unsplash.jpg",
    description: "card 7",
    id: "card7",
  },
  {
    img: "08-wexor-tmg-L-2p8fapOA8-unsplash.jpg",
    description: "card 8",
    id: "card8",
  },
];
const cardOriginal: Card[] = [];

function shuffleNumber(min: number, max: number) {
  let n = Math.random() * (max - min + 1) + min;
  return parseInt(n.toString());
}

uniqueCards.forEach((card, i) => {
  cardOriginal.push({ ...card });
  cardOriginal.push({ ...card });
});
const cards: Card[] = [];

const range = cardOriginal.length;

while (cards.length < range) {
  let shuffled = shuffleNumber(0, cardOriginal.length - 1);
  const item = cardOriginal.splice(shuffled, 1);
  cards.push(item[0]);
}

export { cards };
