


export class LiveChat extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadow = this.attachShadow({ mode: "open" });
        this.textElement = document.createElement("div");
        this.textElement.textContent = "Live Chat";
        const css = document.createElement("link");
        css.setAttribute("rel","stylesheet");
        css.setAttribute("href","./components/liveChat.css");
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.textElement)
    }
}
