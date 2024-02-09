//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import TrafficLight from "./component/TrafficLight.jsx";

//import your own components
// import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
