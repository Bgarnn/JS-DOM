
export class TournamentStart extends HTMLElement{

	constructor(){
		super();
	}

	connectedCallback(){
		this.shadow = this.attachShadow({ mode: "open" });
		const div = document.createElement("div");
		div.textContent = "Tournament Start";

		const css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","./components/tournamentStart.css");

		const button = document.createElement("button");
		button.textContent = "Start";
		button.addEventListener("click",() =>{
			changeTournament("tournament-ongoing")
		})
		div.appendChild(button);
		this.shadow.appendChild(css);
		this.shadow.appendChild(div)
	}

}