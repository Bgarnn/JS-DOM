import { isTag } from "./Utils.js";

export class Profile extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css">
			<link rel="stylesheet" href="./components/profile.css">
			
			<div id="container">
				<div id="profile-photo-big">
					<img src="./images/profile-1.jpg" alt="Profile Photo">
				</div>
				<a id="profile-name">
					<h4>Prem</h4>
				</a>
				<div id="side-bar">
					<a class="menu-item">
						<span><i class="uil uil-user"></i></span>
						<h3 id="account">Account</h3>
					</a>
					<a class="menu-item">
						<span><i class="uil uil-bell"></i></span>
						<h3 id="friendsRequest">Notifications</h3>
					</a>
					<a class="menu-item">
						<span><i class="uil uil-chart-bar"></i></span>
						<h3 id="statistic">Statistic</h3>
					</a>
					<a class="menu-item" id="match-history-menu">
						<span><i class="uil uil-file-alt"></i></span>
						<h3>Match History</h3>
					</a>
					<a class="menu-item">
						<span><i class="uil uil-envelope-block"></i></span>
						<h3 id="blockedList">Blocked List</h3>
					</a>
					<a class="menu-item">
						<span><i class="uil uil-signout"></i></span>
						<h3>Log Out</h3>
					</a>
				</div>
				<div id="offline-pong">
					<span><i class="uil uil-question-circle"></i></span>
					<div id="content">
						<h3>Need Practice?</h3>
						<small>Play OFFLINE with friend!</small>
					</div>
					<button class="btn">Play OFFLINE</button>
				</div>
			</div>
		`;
	};

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();

		this.shadowRoot
			.querySelector("#match-history-menu")
			.addEventListener("click", () => {
				const notificationElement = document
					.querySelector("main-page")
					.shadowRoot.childNodes[0].shadowRoot.querySelector(
						"notifi-cation"
					).shadowRoot;
				addElementInNoti(notificationElement, "match-history");
			});

		this.shadowRoot
			.querySelector("#account")
			.addEventListener("click", () => {
				const notificationElement = document
					.querySelector("main-page")
					.shadowRoot.childNodes[0].shadowRoot.querySelector(
						"notifi-cation"
					).shadowRoot;
				addElementInNoti(notificationElement, "account-managment");
			});

		this.shadowRoot
			.querySelector("#friendsRequest")
			.addEventListener("click", () => {
				const notificationElement = document
					.querySelector("main-page")
					.shadowRoot.childNodes[0].shadowRoot.querySelector(
						"notifi-cation"
					).shadowRoot;
				addElementInNoti(notificationElement, "friends-request");
			});

		this.shadowRoot
			.querySelector("#statistic")
			.addEventListener("click", () => {
				const notificationElement = document
					.querySelector("main-page")
					.shadowRoot.childNodes[0].shadowRoot.querySelector(
						"notifi-cation"
					).shadowRoot;
				addElementInNoti(notificationElement, "statis-tic");
			});

		this.shadowRoot
			.querySelector("#blockedList")
			.addEventListener("click", () => {
				const notificationElement = document
					.querySelector("main-page")
					.shadowRoot.childNodes[0].shadowRoot.querySelector(
						"notifi-cation"
					).shadowRoot;
				addElementInNoti(notificationElement, "block-list");
			});
	}
}

function addElementInNoti(notiElement, nameElement) {
	const addElement = document.createElement(nameElement);
	if (notiElement.childNodes.length == 3) {
		const nodeRemove = notiElement.childNodes[2];
		notiElement.removeChild(nodeRemove);
	}
	if (!isTag(notiElement.lastChild, nameElement)) {
		notiElement.appendChild(addElement);
	}
}

// import { isTag } from "./Utils.js";

// export class Profile extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.shadow = this.attachShadow({ mode: "open" });

//         // Create container div with id="container"
//         const container = document.createElement("div");
//         container.setAttribute("id", "container");

//         // Create profile photo big div
//         const profilePhotoBigDiv = document.createElement("div");
//         profilePhotoBigDiv.setAttribute("id", "profile-photo-big");
//         const img = document.createElement("img");
//         img.setAttribute("src", "./images/profile-1.jpg");
//         profilePhotoBigDiv.appendChild(img);

//         // Create a element for profile name
//         const profileName = document.createElement("a");
//         profileName.setAttribute("id", "profile-name");
//         const h4 = document.createElement("h4");
//         h4.textContent = "Prem";
//         profileName.appendChild(h4);
//         container.appendChild(profilePhotoBigDiv);
//         container.appendChild(profileName);

//         // Create the sidebar div
//         const sidebarDiv = document.createElement("div");
//         sidebarDiv.setAttribute("id", "side-bar");

//         // Function to create menu items
//         const createMenuItem = (iconClass, text, clickHandler, id = null) => {
//             const menuItem = document.createElement("a");
//             menuItem.classList.add("menu-item");
//             if (id) menuItem.id = id;

//             const span = document.createElement("span");
//             const icon = document.createElement("i");
//             icon.classList.add("uil", iconClass);
//             span.appendChild(icon);

//             const h3 = document.createElement("h3");
//             h3.textContent = text;

//             menuItem.appendChild(span);
//             menuItem.appendChild(h3);
//             menuItem.addEventListener("click", clickHandler);

//             return menuItem;
//         };

//         // Create and append menu items to sidebarDiv
//         sidebarDiv.appendChild(createMenuItem("uil-user", "Account", () => {}));
//         sidebarDiv.appendChild(createMenuItem("uil-bell", "Notifications", () => {}));
//         sidebarDiv.appendChild(createMenuItem("uil-chart-bar", "Statistic", () => {}));
//         sidebarDiv.appendChild(createMenuItem("uil-file-alt", "Match History", () => {
//             const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
//             const matchHistory = document.createElement("match-history");
//             console.log(notificationElement);
//             if (notificationElement.childNodes.length == 3) {
//                 const nodeRemove = notificationElement.childNodes[2];
//                 notificationElement.removeChild(nodeRemove);
//             }
//             if (!isTag(notificationElement.lastChild, "match-history")) {
//                 notificationElement.appendChild(matchHistory);
//             }
//         }));
//         sidebarDiv.appendChild(createMenuItem("uil-envelope-block", "Blocked List", () => {}));
//         sidebarDiv.appendChild(createMenuItem("uil-signout", "Log Out", () => {}));

//         // Create and append CSS link
//         const cssIcon = document.createElement("link");
//         cssIcon.setAttribute("rel", "stylesheet");
//         cssIcon.setAttribute("href", "https://unicons.iconscout.com/release/v3.0.6/css/line.css"); // Link to Unicons CSS
//         this.shadow.appendChild(cssIcon); // Append CSS link to shadow DOM

//         // Create and append CSS link
//         const css = document.createElement("link");
//         css.setAttribute("rel", "stylesheet");
//         css.setAttribute("href", "./components/profile.css");
//         this.shadow.appendChild(css); // Append CSS link to shadow DOM

//         // Append sidebarDiv to container
//         container.appendChild(sidebarDiv);

//         const offlinePongDiv = document.createElement("div");
//         offlinePongDiv.setAttribute("id", "offline-pong");

//         const span = document.createElement("span");
//         const icon = document.createElement("i");
//         icon.classList.add("uil", "uil-question-circle");
//         span.appendChild(icon);
//         offlinePongDiv.appendChild(span);

//         const contentDiv = document.createElement("div");
//         contentDiv.setAttribute("id", "content");

//         const h3 = document.createElement("h3");
//         h3.textContent = "Need Practice?";
//         contentDiv.appendChild(h3);

//         const small = document.createElement("small");
//         small.textContent = "Play OFFLINE with friend!";
//         contentDiv.appendChild(small);

//         offlinePongDiv.appendChild(contentDiv);

//         const btn = document.createElement("button");
//         btn.classList.add("btn");
//         btn.textContent = "Play OFFLINE";
//         offlinePongDiv.appendChild(btn);

//         container.appendChild(offlinePongDiv);

//         // Find existing div to insert container into
//         const existingDiv = this.shadow.querySelector('existing-div-selector'); // Replace 'existing-div-selector' with your actual selector

//         if (existingDiv) {
//             // Append container into existing div
//             existingDiv.appendChild(container);
//         } else {
//             // If existingDiv is not found, create a new div and append container to it
//             const newDiv = document.createElement('div');
//             newDiv.appendChild(container);
//             this.shadow.appendChild(newDiv);
//         }
//     }
// }
