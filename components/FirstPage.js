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
					<button id="signIn-btn">SIGN IN</button>
					<div id="loginModal" class="modal">
						<div class="modal-content">
							<div class="closeIcon">
								<i class="uil uil-times"></i>
							</div>
							<login-modal></login-modal>
							<div class="bottom-text">
								<p>Don't have an account? <span id="signUp-text"><b>Sign Up</b></span></p>
							</div>
						</div>
					</div>
					<div id="registerModal" class="modal">
						<div class="modal-content">
							<div class="closeIcon">
								<i class="uil uil-times"></i>
							</div>
							<register-modal></register-modal>
							<div class="bottom-text">
								<p>Already have an account? <span id="signIn-text"><b>Sign In</b></span></p>
							</div>
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

		var loginBtn = this.shadowRoot.getElementById("signIn-btn");
		var loginText = this.shadowRoot.getElementById("signIn-text");
		var loginModal = this.shadowRoot.getElementById("loginModal");
		var registerText = this.shadowRoot.getElementById("signUp-text");
		var registerModal = this.shadowRoot.getElementById("registerModal");
		var closeLogin = this.shadowRoot.childNodes[5].getElementsByClassName("closeIcon")[0];
		var closeRegister = this.shadowRoot.childNodes[5].getElementsByClassName("closeIcon")[1];

		loginBtn.onclick = function() {
			loginModal.style.display = "flex";
		}

		loginText.onclick = function() {
			loginModal.style.display = "flex";
			registerModal.style.display = "none";
		}

		closeLogin.onclick = function() {
			loginModal.style.display = "none";
		}

		registerText.onclick = function() {
			loginModal.style.display = "none";
			registerModal.style.display = "flex";
		}

		closeRegister.onclick = function() {
			registerModal.style.display = "none";
		}

		// this.shadowRoot.querySelector('#loginButton').addEventListener('click', () => {
		// 	navigateToForMainPage("/dashboard-page");
		// });
	}
}