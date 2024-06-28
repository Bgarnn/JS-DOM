import { changeTournament } from "./Utils.js";

export class TournamentStart extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/tournamentStart.css">
			<div>
				Tournament Start
				<button>Start</button>
			</div>
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();

		// Add event listener to button after template is rendered
		const button = this.shadowRoot.querySelector('button');
		if (button) {
			button.addEventListener("click", () => {
				changeTournament("tournament-ongoing");
			});
		}
	}
}


// export class TournamentStart extends HTMLElement{

// 	constructor(){
// 		super();
// 	}

// 	connectedCallback(){
// 		this.shadow = this.attachShadow({ mode: "open" });
// 		const div = document.createElement("div");
// 		div.textContent = "Tournament Start";

// 		const css = document.createElement("link");
// 		css.setAttribute("rel","stylesheet");
// 		css.setAttribute("href","./components/tournamentStart.css");

// 		const button = document.createElement("button");
// 		button.textContent = "Start";
// 		button.addEventListener("click",() =>{
// 			changeTournament("tournament-ongoing")
// 		})
// 		div.appendChild(button);
// 		this.shadow.appendChild(css);
// 		this.shadow.appendChild(div)
// 	}

// }
