export class MatchHistory extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.shadow = this.attachShadow({ mode: "open" });
		this.textElement = document.createElement("div");
		this.textElement.textContent = "match history Element";

		const css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","./components/matchHistory.css");

		this.shadow.appendChild(css);
		this.shadow.appendChild(this.textElement)
	}

	disconnectedCallback(){
		console.log("delete match history components")
	}
}