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

		// Load UniIcons stylesheet
		const iconCss = document.createElement("link");
		iconCss.setAttribute("rel", "stylesheet");
		iconCss.setAttribute("href", "https://unicons.iconscout.com/release/v4.0.8/css/line.css");
		this.shadow.appendChild(iconCss);

		// ----------------------------- NAV BAR -----------------------------
		const containerDiv = document.createElement("div");
		containerDiv.id = "container";

		const logoDiv = document.createElement("div");
		logoDiv.id = "logo";
		const logoIcon = document.createElement("i");
		logoIcon.classList.add("uil", "uil-window-grid");
		logoDiv.appendChild(logoIcon);
		const dashboardHeading = document.createElement("h2");
		dashboardHeading.textContent = "DASHBOARD";
		logoDiv.appendChild(dashboardHeading);
		containerDiv.appendChild(logoDiv);


		const profileDiv = document.createElement("div");
		profileDiv.id = "profile";
		const nameDiv = document.createElement("div");
		nameDiv.id = "profile-name";
		const nameText = document.createElement("p");
		const boldText = document.createElement("b");
		boldText.textContent = "Prem";
		nameText.appendChild(boldText);
		nameDiv.appendChild(nameText);
		profileDiv.appendChild(nameDiv);
		const profilePhotoDiv = document.createElement("div");
		profilePhotoDiv.id = "profile-photo";
		const profilePhotoImg = document.createElement("img");
		profilePhotoImg.setAttribute("src", "./images/profile-1.jpg");
		profilePhotoDiv.appendChild(profilePhotoImg);
		profileDiv.appendChild(profilePhotoDiv);
		containerDiv.appendChild(profileDiv);

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

		const divFooter = document.createElement("div");
		divFooter.setAttribute("id", "footer");
		const gameElement = document.createElement("p");
		const textNode1 = document.createTextNode('@ 2024, Made with ');
		gameElement.appendChild(textNode1);
		const heartIcon = document.createElement("i");
		heartIcon.classList.add('uil', 'uil-heart-alt');
		gameElement.appendChild(heartIcon);
		const textNode2 = document.createTextNode(' by ');
		gameElement.appendChild(textNode2);
		const babyCadetSpan = document.createElement("span");
		babyCadetSpan.textContent = "42 Baby Cadet";	
		gameElement.appendChild(babyCadetSpan);
		divFooter.appendChild(gameElement);
		this.shadow.appendChild(divFooter);
		
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

