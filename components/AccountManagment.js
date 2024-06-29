export class AccountManagment extends HTMLElement {
	constructor() {
		console.log("Account");
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/AccountManagment.css">
			
			<div id="accountManagment">
				AccountManagment
			</div>
		`;
	};

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();
	}

	disconnectedCallback() {
		console.log("delete match history components");
	}
}
