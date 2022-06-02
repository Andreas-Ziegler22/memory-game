import { Card } from "./Card";

export class Game {
  constructor(private dom: HTMLDivElement, private cards: Card[]) {}
  init() {
    console.log("calling init");
    this.dom.innerHTML = `
    ${this.cards
      .map(
        (card) => `
      <div class="card" data-card="${card.id}">
          <img src="${card.img}" class="card-front"alt="${card.description}" >
          <img src="img/back-avatar.png" class="card-back" alt="Memory Card">
      </div>
      `
      )
      .join("")}
    `;
    this.addListener();
  }
}
