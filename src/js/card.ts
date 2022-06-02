interface Card {
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

uniqueCards.forEach((card, i) => {
  cardOriginal.push({ ...card });
  cardOriginal.push({ ...card });
});

export { cardOriginal };
