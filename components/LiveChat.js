export class LiveChat extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/liveChat.css">
			
			<div id="liveChat">
				Live Chat
			</div>
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();
	}
}

// export class LiveChat extends HTMLElement{
//     constructor(){
//         super();
//     }

//     connectedCallback(){
//         this.shadow = this.attachShadow({ mode: "open" });
//         this.textElement = document.createElement("div");
//         this.textElement.textContent = "Live Chat";
//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/liveChat.css");
//         this.shadow.appendChild(css);
//         this.shadow.appendChild(this.textElement)
//     }
// }
