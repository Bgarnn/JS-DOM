import {} from "./dashBoardPage.js";

export function isTag(node, tagName) {
    // Ensure we're dealing with an element node
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
  
    // Compare tag names ignoring case (HTML tags are not case-sensitive)
    return node.tagName.toLowerCase() === tagName.toLowerCase();
  }

  
export class Profile extends HTMLElement{
    constructor(){
        super();
    }
    
    // connectedCallback(){
    //   this.shadow = this.attachShadow({ mode: "open" });
    //   const div = document.createElement("div");
    //   div.textContent = "Profile";

    //   const css = document.createElement("link");
    //   css.setAttribute("rel","stylesheet");
    //   css.setAttribute("href","./components/profile.css");

    //   this.loginElement = document.createElement("p");
    //   this.loginElement.textContent = "Match History";
    //   this.loginElement.addEventListener("click", () => {
    //       const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
    //       const matchHistory = document.createElement("match-history")
    //       console.log(notificationElement);
    //       if(notificationElement.childNodes.length == 3)
    //         {
    //           const nodeRemove = notificationElement.childNodes[2]
    //           notificationElement.removeChild(nodeRemove)
    //         }
    //           // 
    //       if(!isTag(notificationElement.lastChild,"match-history"))
    //           notificationElement.appendChild(matchHistory);
    //   });
    //   // this.shadow.appendChild(this.loginElement)
    //   div.appendChild(this.loginElement);
    //   this.shadow.appendChild(css);
    //   this.shadow.appendChild(div)
    // }
    connectedCallback() {
      this.shadow = this.attachShadow({ mode: "open" });
    
      // Create container div with id="container"
      const container = document.createElement("div");
      container.setAttribute("id", "container");
    
      // Create profile photo big div
      const profilePhotoBigDiv = document.createElement("div");
      profilePhotoBigDiv.setAttribute("id", "profile-photo-big");
    
      // Create img element for profile photo
      const img = document.createElement("img");
      img.setAttribute("src", "./images/sam-1.jpg");
    
      // Append img to profilePhotoBigDiv
      profilePhotoBigDiv.appendChild(img);
    
      // Create a element for profile link
      const profileLink = document.createElement("a");
      profileLink.setAttribute("id", "profile-name");
    
      // Create h4 element for profile name
      const h4 = document.createElement("h4");
      h4.textContent = "Prem";
    
      // Append h4 to profileLink
      profileLink.appendChild(h4);
    
      // Append profilePhotoBigDiv and profileLink to container
      container.appendChild(profilePhotoBigDiv);
      container.appendChild(profileLink);
    
      // Create the sidebar div
      const sidebarDiv = document.createElement("div");
      sidebarDiv.setAttribute("id", "side-bar");
      sidebarDiv.textContent = "Profile";
    
      // Create and append CSS link
      const css = document.createElement("link");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("href", "./components/profile.css");
      this.shadow.appendChild(css); // Append CSS link to shadow DOM
    
      // Create and setup the "Match History" paragraph
      this.loginElement = document.createElement("p");
      this.loginElement.textContent = "Match History";
      this.loginElement.addEventListener("click", () => {
        const notificationElement = document.querySelector('main-page').shadowRoot.childNodes[0].shadowRoot.querySelector("notifi-cation").shadowRoot;
        const matchHistory = document.createElement("match-history");
        console.log(notificationElement);
        if (notificationElement.childNodes.length == 3) {
          const nodeRemove = notificationElement.childNodes[2];
          notificationElement.removeChild(nodeRemove);
        }
        if (!isTag(notificationElement.lastChild, "match-history")) {
          notificationElement.appendChild(matchHistory);
        }
      });
      sidebarDiv.appendChild(this.loginElement); // Append "Match History" paragraph to profileDiv
    
      // Find existing div to insert container into
      const existingDiv = this.shadow.querySelector('existing-div-selector'); // Replace 'existing-div-selector' with your actual selector
    
      if (existingDiv) {
        // Append container into existing div
        existingDiv.appendChild(container);
      } else {
        // If existingDiv is not found, create a new div and append container to it
        const newDiv = document.createElement('div');
        newDiv.appendChild(container);
        this.shadow.appendChild(newDiv);
      }
    
      // Append profileDiv (with "Profile" and "Match History" paragraph) into container
      container.appendChild(sidebarDiv);
    }
    
}

customElements.define("pro-file", Profile);



