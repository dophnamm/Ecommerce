import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Views/App";
import { StateProvider } from "./Contexts/StateProvider";
import reducer, { initialState } from "./store/reducer";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
