import {} from "./dashBoardPage.js";

export function isTag(node, tagName) {
    // Ensure we're dealing with an element node
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }

    // Compare tag names ignoring case (HTML tags are not case-sensitive)
    return node.tagName.toLowerCase() === tagName.toLowerCase();
}

export class Profile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.shadow = this.attachShadow({ mode: "open" });

        // Create container div with id="container"
        const container = document.createElement("div");
        container.setAttribute("id", "container");

        // Create profile photo big div
        const profilePhotoBigDiv = document.createElement("div");
        profilePhotoBigDiv.setAttribute("id", "profile-photo-big");
        const img = document.createElement("img");
        img.setAttribute("src", "./images/profile-1.jpg");
        profilePhotoBigDiv.appendChild(img);

        // Create a element for profile name
        const profileName = document.createElement("a");
        profileName.setAttribute("id", "profile-name");
        const h4 = document.createElement("h4");
        h4.textContent = "Prem";
        profileName.appendChild(h4);
        container.appendChild(profilePhotoBigDiv);
        container.appendChild(profileName);

        // Create the sidebar div
        const sidebarDiv = document.createElement("div");
        sidebarDiv.setAttribute("id", "side-bar");

        // Function to create menu items
        const createMenuItem = (iconClass, text, clickHandler, id = null) => {
            const menuItem = document.createElement("a");
            menuItem.classList.add("menu-item");
            if (id) menuItem.id = id;

            const span = document.createElement("span");
            const icon = document.createElement("i");
            icon.classList.add("uil", iconClass);
            span.appendChild(icon);

            const h3 = document.createElement("h3");
            h3.textContent = text;

            menuItem.appendChild(span);
            menuItem.appendChild(h3);
            menuItem.addEventListener("click", clickHandler);

            return menuItem;
        };

        // Create and append menu items to sidebarDiv
        sidebarDiv.appendChild(createMenuItem("uil-user", "Account", () => {}));
        sidebarDiv.appendChild(createMenuItem("uil-bell", "Notifications", () => {}));
        sidebarDiv.appendChild(createMenuItem("uil-chart-bar", "Statistic", () => {}));
        sidebarDiv.appendChild(createMenuItem("uil-file-alt", "Match History", () => {
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
        }));
        sidebarDiv.appendChild(createMenuItem("uil-envelope-block", "Blocked List", () => {}));
        sidebarDiv.appendChild(createMenuItem("uil-signout", "Log Out", () => {}));

        // Create and append CSS link
        const cssIcon = document.createElement("link");
        cssIcon.setAttribute("rel", "stylesheet");
        cssIcon.setAttribute("href", "https://unicons.iconscout.com/release/v3.0.6/css/line.css"); // Link to Unicons CSS
        this.shadow.appendChild(cssIcon); // Append CSS link to shadow DOM

        // Create and append CSS link
        const css = document.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "./components/profile.css");
        this.shadow.appendChild(css); // Append CSS link to shadow DOM

        // Append sidebarDiv to container
        container.appendChild(sidebarDiv);

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
    }
}

customElements.define("pro-file", Profile);
