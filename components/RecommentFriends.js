// // export class RecommentFriends extends HTMLElement{
//     constructor(){
//         super();
//     }

//     connectedCallback(){
//         this.shadow = this.attachShadow({ mode: "open" });
//         this.textElement = document.createElement("div");
//         this.textElement.textContent = "RecommentFriends";

//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/recommentFriends.css");

//         this.shadow.appendChild(css);
//         this.shadow.appendChild(this.textElement)
//     }

//     disconnectedCallback(){
//         // console.log("delete")
//     }
// }

export class RecommentFriends extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/recommentFriends.css">
			<div>RecommentFriends</div>
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();
	}

	disconnectedCallback() {
		// console.log("delete")
	}
}
