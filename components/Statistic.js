export class Statistic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template = () => {
    return `
			<link rel="stylesheet" href="./components/Statistic.css">
			<div>Statistic</div>
		`;
  };

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template();
  }

  disconnectedCallback() {
    // console.log("delete")
  }
}
