


export class Modal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/Modal.css">
			<div>
				modal
			</div>
            
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();

		this.shadowRoot.querySelector('#login').addEventListener('click', () => {
			// changeNotification("recommends-friends");
		});
	}
}
