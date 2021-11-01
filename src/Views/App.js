import Home from "../components/Home/Home";
import Checkout from "../components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/checkout-product">
						<Checkout />
					</Route>

					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
