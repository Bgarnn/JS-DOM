export class DashBoardPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

		template = () => {
				return `
						<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
						<link rel="stylesheet" href="./components/DashBoardPage.css">

						<div id="nav-bar">
								<div id="container">
										<div id="menu">
												<i class="uil uil-bars"></i>
										</div>
										<div id="logo">
												<i class="uil uil-window-grid"></i>
												<h2>DASHBOARD</h2>
										</div>
										<div id="profile">
												<div id="profile-name">
														<p><b>Prem</b></p>
												</div>
												<div id="profile-photo">
														<img src="../images/profile-1.jpg" alt="Profile Photo">
												</div>
										</div>
								</div>
						</div>

						<div id="div-content">
								<pro-file id="pro-file"></pro-file>
								<div id="div-middle">
										<tour-na-ment></tour-na-ment>
										<notifi-cation></notifi-cation>
								</div>
								<div id="div-right">
										<friends-block></friends-block>
										<live-chat></live-chat>
								</div>
						</div>

						<div id="footer">
								<p>
										@ 2024, Made with 
										<i class="uil uil-heart-alt"></i> 
										by 
										<span>42 Baby Cadet</span>
								</p>
						</div>
				`;
		}

	toggleProfileVisibility = () => {
		const profile = this.shadowRoot.getElementById('pro-file');
		if (profile) {
			profile.style.display = profile.style.display === 'none' ? 'block' : 'none';
		}
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();
		const menuIcon = this.shadowRoot.getElementById('menu');
		if (menuIcon) {
			menuIcon.addEventListener('click', this.toggleProfileVisibility);
		}
	}
}

// // import styles from "../components/dashBoardPage.css " assert { type: "css" }
// import {} from "../index.js"
// export class DashBoardPage extends HTMLElement{
//     constructor(){
//         super();
//         this.attachShadow({ mode: "open" });
//     }

//     connectedCallback(){
//         this.navElement = document.createElement("div");
//         // this.navElement.textContent = "nav bar";
//         this.navElement.setAttribute("id", "nav-bar");

//         // Load UniIcons stylesheet
//         const iconCss = document.createElement("link");
//         iconCss.setAttribute("rel", "stylesheet");
//         iconCss.setAttribute("href", "https://unicons.iconscout.com/release/v4.0.8/css/line.css");
//         this.shadowRoot.appendChild(iconCss);

//         // ----------------------------- NAV BAR -----------------------------
//         const containerDiv = document.createElement("div");
//         containerDiv.id = "container";

//         const logoDiv = document.createElement("div");
//         logoDiv.id = "logo";
//         const logoIcon = document.createElement("i");
//         logoIcon.classList.add("uil", "uil-window-grid");
//         logoDiv.appendChild(logoIcon);
//         const dashboardHeading = document.createElement("h2");
//         dashboardHeading.textContent = "DASHBOARD";
//         logoDiv.appendChild(dashboardHeading);
//         containerDiv.appendChild(logoDiv);


//         const profileDiv = document.createElement("div");
//         profileDiv.id = "profile";
//         const nameDiv = document.createElement("div");
//         nameDiv.id = "profile-name";
//         const nameText = document.createElement("p");
//         const boldText = document.createElement("b");
//         boldText.textContent = "Prem";
//         nameText.appendChild(boldText);
//         nameDiv.appendChild(nameText);
//         profileDiv.appendChild(nameDiv);
//         const profilePhotoDiv = document.createElement("div");
//         profilePhotoDiv.id = "profile-photo";
//         const profilePhotoImg = document.createElement("img");
//         profilePhotoImg.setAttribute("src", "../images/profile-1.jpg");
//         profilePhotoDiv.appendChild(profilePhotoImg);
//         profileDiv.appendChild(profilePhotoDiv);
//         containerDiv.appendChild(profileDiv);

//         this.navElement.appendChild(containerDiv);
//         // -----------------------------------------------------------------

//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/DashBoardPage.css");
//         //append nav-bar
//         this.shadowRoot.appendChild(css);
//         this.shadowRoot.appendChild(this.navElement)

//         this.profileElement = document.createElement("pro-file")
//         this.profileElement.setAttribute("id","pro-file");

//         this.notificationElement = document.createElement("notifi-cation")
//         const divMiddle = document.createElement("div");
//         divMiddle.setAttribute("id","div-middle");
//         this.tournamentElement = document.createElement("tour-na-ment")
//         divMiddle.appendChild(this.tournamentElement);
//         divMiddle.appendChild(this.notificationElement);
				
//         const divRight = document.createElement("div");
//         const liveChat = document.createElement("live-chat");
//         const friend = document.createElement("friends-block");
//         divRight.setAttribute("id","div-right");
//         divRight.appendChild(friend);
//         divRight.appendChild(liveChat);

//         const divContent = document.createElement("div");
//         divContent.setAttribute("id","div-content");
//         divContent.appendChild(this.profileElement);
//         divContent.appendChild(divMiddle);
//         divContent.appendChild(divRight)

//         console.log(divContent);
//         this.shadowRoot.appendChild(divContent)

//         const divFooter = document.createElement("div");
//         divFooter.setAttribute("id", "footer");
//         const gameElement = document.createElement("p");
//         const textNode1 = document.createTextNode('@ 2024, Made with ');
//         gameElement.appendChild(textNode1);
//         const heartIcon = document.createElement("i");
//         heartIcon.classList.add('uil', 'uil-heart-alt');
//         gameElement.appendChild(heartIcon);
//         const textNode2 = document.createTextNode(' by ');
//         gameElement.appendChild(textNode2);
//         const babyCadetSpan = document.createElement("span");
//         babyCadetSpan.textContent = "42 Baby Cadet";    
//         gameElement.appendChild(babyCadetSpan);
//         divFooter.appendChild(gameElement);
//         this.shadowRoot.appendChild(divFooter);
				
//         // this.shadow.appendChild(this.profileElement)
//         // this.shadow.appendChild(this.notificationElement)
//         // this.buttonElement = document.createElement("button");
//         // this.buttonElement.textContent = "Click to DashBoard";
//         // this.buttonElement.addEventListener("click", () => {
//         //   navigateToForMainPage("/first-page");
//         // });
//         // this.shadow.appendChild(this.buttonElement)
//     }
// }