import React, { useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const signIn = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				toast.success("Đăng nhập thành công");
				history.push("/");
			})

			.catch((error) => {
				toast.error("Đăng nhập không thành công");
				console.log(error);
			});
	};

	const register = (e) => {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
					toast.success("Đăng ký thành công");
				}
			})

			.catch((error) => {
				toast.error("Đăng ký không thành công");
				console.log(error);
			});
	};

	return (
		<div id="login">
			<div className="container">
				<div className="login__container">
					<div className="login__title">
						<h2>Sign-in</h2>
					</div>

					<form action="">
						<div className="form-group">
							<label>E-mail</label>
							<input
								type="email"
								placeholder="Your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								placeholder="Your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn-signin" onClick={signIn}>
							Sign In
						</button>
					</form>
					<p className="sub-create">
						By sigining-in you agree to the Shop Website Conditions of Use & Sale. Please see our Privacy
						Notice, our Cookies Noctice and our Internet-Based Ads Notice .
					</p>
					<button className="btn-create" onClick={register}>
						Create your Shop Account
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
