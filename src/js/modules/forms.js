import { postData } from "../services/requests";

export default class Forms {
	constructor({ triggerForm, databaseName }) {
		this.forms = document.querySelectorAll(triggerForm);
		this.database = databaseName;
	}

	init() {
		this.forms.forEach(form => {
			this.bindPostData(form, this.database);
		});
	}

	bindPostData(form, database) {
		form.addEventListener("submit", e => {
			e.preventDefault();
			console.log(database);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData(`http://localhost:3000/${database}`, json)
				.then(data => {
					console.log(data);
				})
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					form.reset();
				});
		});
	}
}
