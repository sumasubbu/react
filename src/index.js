import React from "react"
import ReactDOM from "react-dom"
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import App2 from "./components/App2"
import App1 from "./components/App1"


ReactDOM.render(<App1 />,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
