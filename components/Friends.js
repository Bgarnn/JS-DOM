// import { changeNotification } from "./Utils.js";

// export class Friends extends HTMLElement{
//     constructor(){
//         super();
//     }

//     connectedCallback(){
//         this.shadow = this.attachShadow({ mode: "open" });
//         this.textElement = document.createElement("div");
//         this.textElement.textContent = "Friends";
//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/friends.css");


//         this.findFriends = document.createElement("button");
//         this.findFriends.textContent = "Find Friends"
//         this.findFriends.addEventListener("click",() =>{
//             changeNotification("recommends-friends")
//         })
//         this.textElement.appendChild(this.findFriends)
//         this.shadow.appendChild(css);
//         this.shadow.appendChild(this.textElement)
//     }
// }
import { changeNotification } from "./Utils.js";

export class Friends extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/friends.css">
			
			<div id="friends">
				Friends
				<button id="findFriendsButton">Find Friends</button>
			</div>
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();

		this.shadowRoot.querySelector('#findFriendsButton').addEventListener('click', () => {
			changeNotification("recommends-friends");
		});
	}
}
