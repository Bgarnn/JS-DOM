export class Tournament extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  template = () => {
    return `
			<link rel="stylesheet" href="./components/tournament.css">
			<div><tournament-upcoming></tournament-upcoming></div>
		`;
  };

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template();
  }
}

// // export class Tournament extends HTMLElement{
//     constructor(){
//         super();
//     }

//     connectedCallback(){
//         this.shadow = this.attachShadow({ mode: "open" });
//         const div = document.createElement("div");
//         // div.textContent = "Tournament";
//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/tournament.css");
//         this.shadow.appendChild(css);

//         const upcoming = document.createElement("tournament-upcoming")
//         div.append(upcoming)

//         // this.buttonElement = document.createElement("button");
//         // this.buttonElement.textContent = "JOIN TOURNAMENT";
//         // this.buttonElement.addEventListener("click", () =>{
//         //     changeNotification("tournament-start");
//         // })
//         console.log(div.childNodes)

//         // div.appendChild(this.buttonElement)
//         this.shadow.appendChild(div)
//     }
// }
