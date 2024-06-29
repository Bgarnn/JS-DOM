export class BlockedList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/BlockedList.css">
			
			<div id="BlockedList">
				BlockedList
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
