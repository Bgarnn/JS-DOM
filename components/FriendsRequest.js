export class FriendsRequest extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template = () => {
    return `
			<link rel="stylesheet" href="./components/FriendsRequest.css">
			
			<div id="FriendsRequest">
				FriendsRequest
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
