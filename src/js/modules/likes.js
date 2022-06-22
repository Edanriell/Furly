export default class Likes {
	constructor({ cards, triggerBtn }) {
		this.cards = document.querySelectorAll(cards);
		this.trigger = document.querySelectorAll(triggerBtn);
	}

	init() {
		this.trigger.forEach((btn, idx) => {
			btn.addEventListener("click", () => {
				if (!this.cards[idx].getAttribute("data-liked")) {
					this.addLike(btn);
				} else if (this.cards[idx].getAttribute("data-liked")) {
					this.removeLike(btn);
				}
			});
		});
	}

	addLike(btn) {
		const card = btn.parentElement;
		btn.classList.remove("page-main__products__content__item__card__add-to-favourites");
		btn.classList.add("page-main__products__content__item__card__add-to-favourites__liked");
		card.style.cssText = `box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, 
       rgb(51, 51, 51) 0px 0px 0px 3px; transition: all 0.20s;`;
		card.setAttribute("data-liked", "true");
	}

	removeLike(btn) {
		const card = btn.parentElement;
		btn.classList.remove("page-main__products__content__item__card__add-to-favourites__liked");
		btn.classList.add("page-main__products__content__item__card__add-to-favourites");
		card.style.cssText = "box-shadow: rgba(0, 0, 0)";
		card.removeAttribute("data-liked");
	}
}
