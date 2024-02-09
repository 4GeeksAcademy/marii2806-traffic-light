import React from "react";

export default class TrafficLight extends React.Component{

    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }

    render(){

        let redExtraClass = "";
        if (this.state.clickedLight == "red") redExtraClass = "selectedRed";
        let yellowExtraClass = "";
        if (this.state.clickedLight == "yellow") yellowExtraClass = "selectedYellow";
        let greenExtraClass = "";
        if (this.state.clickedLight == "green") greenExtraClass = "selectedGreen";

        return <div>
            <div id="trafficTop"></div>
            <div id="container">
                    <div className={"light red "+ redExtraClass} onClick={() => this.setState({clickedLight: "red"})}></div>
                    <div className={"light yellow "+ yellowExtraClass} onClick={() => this.setState({clickedLight: "yellow"})}></div>
                    <div className={"light green "+ greenExtraClass} onClick={() => this.setState({clickedLight: "green"})}></div>
            </div>
        </div>;
    }
}