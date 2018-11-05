/* eslint-disable */
import React, { Component, createElement } from 'react';
import logo from './logo.svg';
import './App.css';
// import TableExampleComplex from "./Table";

class App extends Component {
    rows = ["1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"];
    constructor(props) {
        super(props);

        // this.tasksArray = [object1];
        this.state = {
            seatStatus: "*"
        }
    }
    render() {
        return this.getHeader();
        // this.getSeats();
    }

    getHeader = () => {
        return (
            createElement("div", { className: "App" },
                createElement("header", { className: "App-header" },
                    createElement("img", { src: logo, className: "App-logo", alt: logo }),
                    createElement("h5", {}, "CSC 3112: Pinciples of Programming Languages - Assignment: Cinema Booking"),
                    // TODO: add table looking
                    createElement("div", { className: "vvip" },
                        createElement("input", { type: "file", className: "openFile", onClick: this.fileReader }),
                        createElement("p", { className: "price" }, "Very VIP = 100,000 shillings"),
                        createElement("p", { className: "price" }, "VIP = 50,000 shillings"),
                        createElement("p", { className: "price" }, "Twin Seats = 25,000 shillings"),
                        createElement("p", { className: "price" }, "Economy = 20,000 shillings"),
                        createElement("p", { className: "columnHeader" }, this.rows.toString()),
                        ("A ", this.getButtons()),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons(),
                        this.getButtons()
                    )
                )
            )
        );
    }

    fileReader = () => {
        var fr = new FileReader();
        fr.onload = () => {
            createElement("pre", { className: "FileContents", textContent: this.result })
        }

    }

    statePlay = () => {
        if (this.state.seatStatus === "*") {
            if (window.confirm("Would you like to book this seat?")) {
                this.setState({
                    seatStatus: "#"
                })
            } else return;
        }
    }

    getButtons = () => {
        var MaButton = createElement("p", { className: "paragraph" },
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus),
            createElement("button", { onClick: this.statePlay }, this.state.seatStatus)
        )
        return MaButton;
    }
}

export default App;