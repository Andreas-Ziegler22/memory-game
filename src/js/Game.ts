import { Card } from "./Card";

export class Game {
  constructor(private dom: HTMLDivElement, private cards: Card[]) {}

  addListeners() {
    Array.from(this.dom.querySelectorAll("[data-card]")).forEach((card, i) => {
      card.addEventListener("click", (e) => {
        const cardClicked = e.currentTarget as HTMLDivElement;
        cardClicked.classList.add("show");
      });
    });
  }

  init() {
    console.log("calling init");
    this.dom.innerHTML = `
    ${this.cards
      .map(
        (card) => `
      <div class="card" data-card="${card.id}">
          <img src="img/${card.img}" class="card-front"alt="${card.description}" >
          <img src="img/back-avatar.png" class="card-back" alt="Memory Card">
      </div>
      `
      )
      .join("")}
    `;
    this.addListeners();
  }
}
