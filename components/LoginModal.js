export class LoginModal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/LoginModal.css">
			<div  id="container">
				<div>
					<form action="" id="signInForm">
						<h3>Welcome Back</h3>
						<h4 class="gray">Enter your username and password to sign in</h4>
						<div id="username-con">
							<label for="username">Username</label>
							<input class="input-css" type="text" placeholder="Your username" id="username">
						</div>
						<div id="password-con">
							<label for="password">Password</label>
							<input class="input-css" type="password" placeholder="Your password" id="password">
						</div>
						<button type="submit">SIGN IN</button>
					</form>
				</div>
				<div>
					<h4>or</h4>
				</div>
				<div id="signIn-with">
					<h4 class="gray">Sign In with</h4>
					<button type="submit" id="btn-42">
						<img src="../images/42eco.png" alt="42 icon">
					</button>
				</div>
			</div>
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();
	}
}
