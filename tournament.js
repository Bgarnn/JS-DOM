import { changeNotification } from "./dashBoardPage.js";
import { isTag} from "./profile.js"
export class Tournament extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.shadow = this.attachShadow({ mode: "open" });
		const div = document.createElement("div");
		// div.textContent = "Tournament";
		const css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","./components/tournament.css");
		this.shadow.appendChild(css);

		const upcoming = document.createElement("tournament-upcoming")
		div.append(upcoming)

		// this.buttonElement = document.createElement("button");
		// this.buttonElement.textContent = "JOIN TOURNAMENT";
		// this.buttonElement.addEventListener("click", () =>{
		//     changeNotification("tournament-start");
		// })
		console.log(div.childNodes)

		// div.appendChild(this.buttonElement)
		this.shadow.appendChild(div)
	}
}

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

export class TournamentOngoing extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.shadow = this.attachShadow({ mode: "open" });
		const div = document.createElement("div");
		div.textContent = "Tournament Ongoning";

		const css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","./components/tournamentOngoing.css");

		const button = document.createElement("button");
		button.textContent = "Start";
		button.addEventListener("click",() =>{
			changeTournament("tournament-start")
		})
		div.appendChild(button);
		this.shadow.appendChild(css);
		this.shadow.appendChild(div)
	}
}

export class TournamentUpcoming extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback() {
		this.shadow = this.attachShadow({ mode: "open" });
	
		// Create link element for CSS
		const css = document.createElement("link");
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "./components/tournamentUpcoming.css");
		// Create and append CSS link
		const cssIcon = document.createElement("link");
		cssIcon.setAttribute("rel", "stylesheet");
		cssIcon.setAttribute("href", "https://unicons.iconscout.com/release/v3.0.6/css/line.css"); // Link to Unicons CSS
	
		// Create the container div
		const div = document.createElement("div");
		div.id = "tour-upcomimg";
	
		// Create the span element with the icon
		const span = document.createElement("span");
		const icon = document.createElement("i");
		icon.classList.add("uil", "uil-check-circle");
		span.appendChild(icon);
	
		// Create the content div
		const contentDiv = document.createElement("div");
		contentDiv.id = "content";
	
		const h4 = document.createElement("h4");
		h4.textContent = "TOURNAMENT is upcoming ...";
	
		const small = document.createElement("small");
		small.textContent = "registered member (1/4)";
	
		contentDiv.appendChild(h4);
		contentDiv.appendChild(small);
	
		// Create the button
		const button = document.createElement("button");
		button.textContent = "JOIN TOURNAMENT";
		button.classList.add("btn");
		button.addEventListener("click", () => {
			changeNotification("tournament-start");
		});
	
		// Append all elements to the container div
		div.appendChild(span);
		div.appendChild(contentDiv);
		div.appendChild(button);
	
		// Append CSS and container div to shadow DOM
		this.shadow.appendChild(cssIcon);
		this.shadow.appendChild(css);
		this.shadow.appendChild(div);
	}
	
}

function changeTournament(element){
	const tournamentElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("tour-na-ment").shadowRoot.lastChild;
	console.log(tournamentElement.childNodes)
	// console.log(tournamentElement.childNodes[1].childNodes.length);
	
	if(tournamentElement.childNodes.length == 1)
	{
		const nodeRemove = tournamentElement.childNodes[0];
		// console.log(nodeRemove)
		tournamentElement.removeChild(nodeRemove)
	} 
	const newElement = document.createElement(element)
	console.log(newElement)
	tournamentElement.appendChild(newElement);

}


customElements.define("tournament-start", TournamentStart)
customElements.define("tour-na-ment", Tournament)
customElements.define("tournament-ongoing",TournamentOngoing)
customElements.define("tournament-upcoming", TournamentUpcoming)