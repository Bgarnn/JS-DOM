import {} from "./friends.js"
import {} from "./tournament.js"
import { isTag} from "./profile.js"
export class Notification extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.shadow = this.attachShadow({ mode: "open" });
		this.textElement = document.createElement("div");
		// this.textElement.textContent = "notification";

		const css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","./components/notification.css");

		this.shadow.appendChild(css);
		this.shadow.appendChild(this.textElement)
	}
}

export function changeNotification(element){
	const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
	// console.log(notificationElement.childNodes);
	if(notificationElement.childNodes.length == 3)
	{
		const nodeRemove = notificationElement.childNodes[2]
		notificationElement.removeChild(nodeRemove)
	}
	const matchHistory = document.createElement(element)
	if(!isTag(notificationElement.lastChild, element))
		notificationElement.appendChild(matchHistory);
}


customElements.define("notifi-cation", Notification);
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


export class DashBoardPage extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.shadow = this.attachShadow({ mode: "open" });
		this.navElement = document.createElement("div");
		// this.navElement.textContent = "nav bar";
		this.navElement.setAttribute("id", "nav-bar");

		// ----------------------------- NAV BAR -----------------------------
	// Adding container div inside nav-bar
	const containerDiv = document.createElement("div");
	containerDiv.id = "container";

	// Adding logo div inside container
	const logoDiv = document.createElement("div");
	logoDiv.id = "logo";

	// Create img element for logo
	const logoImg = document.createElement("img");
	logoImg.setAttribute("src", "./images/logo.png");
	logoDiv.appendChild(logoImg);

	// Create h2 element for dashboard text
	const dashboardHeading = document.createElement("h2");
	dashboardHeading.textContent = "DASHBOARD";
	logoDiv.appendChild(dashboardHeading);

	// Append logoDiv to containerDiv
	containerDiv.appendChild(logoDiv);

	// Adding profile div inside container
	const profileDiv = document.createElement("div");
	profileDiv.id = "profile";

	// Create div.info for profile info
	const infoDiv = document.createElement("div");
	infoDiv.id = "info";

	// Create p element inside infoDiv
	const infoText = document.createElement("p");
	const boldText = document.createElement("b");
	boldText.textContent = "Prem";
	infoText.appendChild(boldText);
	infoDiv.appendChild(infoText);
	profileDiv.appendChild(infoDiv);

	// Create div#profile-photo for profile photo
	const profilePhotoDiv = document.createElement("div");
	profilePhotoDiv.id = "profile-photo";

	// Create img element for profile photo
	const profilePhotoImg = document.createElement("img");
	profilePhotoImg.setAttribute("src", "./images/profile-1.jpg");
	profilePhotoDiv.appendChild(profilePhotoImg);
	profileDiv.appendChild(profilePhotoDiv);

	// Append profileDiv to containerDiv
	containerDiv.appendChild(profileDiv);

	// Append containerDiv to navElement (assuming this.navElement exists)
	this.navElement.appendChild(containerDiv);

		// -----------------------------------------------------------------


		const css = document.createElement("link");
		css.setAttribute("rel","stylesheet");
		css.setAttribute("href","./components/dashBoardPage.css");

		//append nav-bar
		this.shadow.appendChild(css);
		this.shadow.appendChild(this.navElement)

		
		this.profileElement = document.createElement("pro-file")
		this.profileElement.setAttribute("id","pro-file");

		this.notificationElement = document.createElement("notifi-cation")
		const divMiddle = document.createElement("div");
		divMiddle.setAttribute("id","div-middle");
		this.tournamentElement = document.createElement("tour-na-ment")
		divMiddle.appendChild(this.tournamentElement);
		divMiddle.appendChild(this.notificationElement);
		
		const divRight = document.createElement("div");
		const liveChat = document.createElement("live-chat");
		const friend = document.createElement("friends-block");
		divRight.setAttribute("id","div-right");
		divRight.appendChild(friend);
		divRight.appendChild(liveChat);

		const divContent = document.createElement("div");
		divContent.setAttribute("id","div-content");
		divContent.appendChild(this.profileElement);
		divContent.appendChild(divMiddle);
		divContent.appendChild(divRight)

		console.log(divContent);
		this.shadow.appendChild(divContent)

		const divFooter = document.createElement("div")
		divFooter.setAttribute("id","footer");
		this.gameElement = document.createElement("p");
		this.gameElement.textContent = "Footer"; 
		divFooter.appendChild(this.gameElement)
		this.shadow.appendChild(divFooter)
		// this.shadow.appendChild(this.profileElement)
		// this.shadow.appendChild(this.notificationElement)
		// this.buttonElement = document.createElement("button");
		// this.buttonElement.textContent = "Click to DashBoard";
		// this.buttonElement.addEventListener("click", () => {
		//   navigateToForMainPage("/first-page");
		// });
		// this.shadow.appendChild(this.buttonElement)
	}
}

customElements.define("dashboard-page", DashBoardPage);
customElements.define("match-history", MatchHistory);

