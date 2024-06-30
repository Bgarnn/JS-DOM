import { navigateToForMainPage } from "../index.js";

export class FirstPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
			<link rel="stylesheet" href="./components/firstPage.css">
			
			<div id="nav">
				<div id="bg">
					<button id="signInButton">SIGN IN</button>
					<!-- The Modal -->
					<div id="myModal" class="modal">
						<!-- Modal content -->
						<div class="modal-content">
							<span class="closeModal">&times;</span>
							<mo-del></mo-del>
						</div>
					</div>
					<p id="text-join">to join the TOURNAMENT !</p>
				</div>
			</div>
			
			<div id="gameTag">
				<p>Game</p>
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

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();

		var modal = this.shadowRoot.getElementById("myModal");

		// Get the button that opens the modal
		var btn = this.shadowRoot.getElementById("signInButton");
		// console.log(this.shadowRoot.childNodes[5].getElementsByClassName("closeModal")[0])
		// Get the <span> element that closes the modal
		var span = this.shadowRoot.childNodes[5].getElementsByClassName("closeModal")[0];

		// When the user clicks the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		this.shadowRoot.querySelector('#loginButton').addEventListener('click', () => {
			navigateToForMainPage("/dashboard-page");
		});
	}
}

// import {navigateToForMainPage} from "../index.js"

// export class FirstPage extends HTMLElement{
//     constructor(){
//         super();
//     }
		
//     connectedCallback(){
//         this.shadow = this.attachShadow({ mode: "open" });
//         this.div = document.createElement("div");
//         this.div.setAttribute("id","firstPage")

//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/firstPage.css");

//         this.textElement = document.createElement("p");
//         this.textElement.textContent = "First Page";
//         this.loginElement = document.createElement("button");
//         this.loginElement.textContent = "Login";
//         this.loginElement.addEventListener("click", () => {
//           navigateToForMainPage("/dashboard-page");
//         });

//         this.div.appendChild(css)
//         this.div.appendChild(this.textElement)
//         this.div.appendChild(this.loginElement)

//         this.shadow.appendChild(this.div)
//         let divGame = document.createElement("div")
//         divGame.setAttribute("id","gameTag");
//         this.gameElement = document.createElement("p");
//         this.gameElement.textContent = "Game";

//         divGame.appendChild(this.gameElement)

		
//         this.shadow.appendChild(divGame)

//         const divFooter = document.createElement("div")
//         divFooter.setAttribute("id","footer");
//         this.gameElement = document.createElement("p");
//         this.gameElement.textContent = "Footer"; 
//         divFooter.appendChild(this.gameElement)
//         this.shadow.appendChild(divFooter)
//     }
// }
