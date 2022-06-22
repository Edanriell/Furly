import "../sass/main.sass";

import Cards from "./modules/cards";
import Likes from "./modules/likes";
import Forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
	const cards = new Cards({
		container: ".page-main__products__content",
		triggerBtn: ".page-main__products__load-more"
	});

	const likes = new Likes({
		cards: ".page-main__products__content__item__card",
		triggerBtn: ".page-main__products__content__item__card__add-to-favourites"
	});

	const form = new Forms({
		triggerForm: "#form",
		databaseName: "emails"
	});

	cards.getCardsOnClick();
	likes.init();
	form.init();
});
