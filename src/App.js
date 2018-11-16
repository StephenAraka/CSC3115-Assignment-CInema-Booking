 /* eslint-disable */
 import { Component, createElement } from "react";
 import BootstrapTable from "react-bootstrap-table-next";
 import logo from "./logo.svg";
 import './bootstrap/css/bootstrap.min.css';
 import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
 import './App.css';
 import { data, columns } from "./Utils";
 import { object } from "prop-types";


 class App extends Component {
     constructor(props) {
         super(props);
         this.readTextFile = this.readTextFile.bind(this);
         this.selectNumber = this.selectNumber.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.selectCategory = this.selectCategory.bind(this);

         this.state = {
             prices: "",
             welcome: "",
             numberOfSeats: 0,
             seatCategory: "",
             Available: 0,
             VVIP: 98,
             VIP: 120,
             Twin: 22,
             Economy: 80,
             subTotal: 0,
             totalSales: 0
         }
     }

     render() {
         return (
             createElement("div", { className: "App" },
                 createElement("header", { className: "App-header" },
                     createElement("img", { src: logo, className: "App-logo", alt: logo }),
                     createElement("h4", {}, "CSC 3112: Pinciples of Programming Languages - Assignment: Cinema Booking"),
                     // TODO: add table looking
                     createElement("div", { className: "Prices" },
                         createElement("div", {}, "Please click to obtain the seats prices:",
                             createElement("input", { type: "file", accept: "text/plain", onChange: this.readTextFile })),
                     ),
                     createElement("p", { className: "printPrices" }, this.state.prices),
                     createElement(BootstrapTable, { className: "seatsTable", keyField: "id", data: data, columns: columns }),
                     this.createForm(),
                     createElement("div", { className: "Availability" },
                         createElement("p", {}, "Number of seats available: " + this.getTotalAvailableSeats()),
                         createElement("p", {}, "VVIP: " + this.state.VVIP),
                         createElement("p", {}, "VIP: " + this.state.VIP),
                         createElement("p", {}, "Twin Seats: " + this.state.Twin),
                         createElement("p", {}, "Economy: " + this.state.Economy),
                         createElement("p", {}, "TOTAL SALES = " + this.state.totalSales + " shillings")
                     )
                 ))
         );
     }

     readTextFile(event) {
         var input = event.target;;
         var reader = new FileReader();
         reader.onload = () => {
             var text = reader.result;
             this.setState({ prices: text.substring(0, 200) });
         };
         if (input.files[0]) {
             reader.readAsText(input.files[0]);
         } else {
             alert("Please choose a valid file!");
             return;
         }
     }

     createForm = () => {
         return (
             createElement("form", { onSubmit: this.handleSubmit },
                 createElement("label", {}, "Number of seats:",
                     createElement("input", { className: "inputHint", type: "number", min: 0, value: this.state.numberOfSeats, onChange: this.selectNumber })),
                 createElement("label", {}, "Seat Category:",
                     createElement("select", { className: "inputHint", onChange: this.selectCategory },
                         createElement("option", { value: "" }, ""),
                         createElement("option", { value: "VVIP" }, "VVIP"),
                         createElement("option", { value: "VIP" }, "VIP"),
                         createElement("option", { value: "Twin" }, "Twin"),
                         createElement("option", { value: "Economy" }, "Economy")
                     )
                 ),
                 createElement("input", { className: "submitIt", type: "submit", value: "Submit" }))
         );
     }

     selectNumber(event) {
         this.setState({ numberOfSeats: event.target.value });
         event.preventDefault();
     }

     selectCategory(event) {
         this.setState({ seatCategory: event.target.value });
         event.preventDefault();
     }

     handleSubmit(event) {
         var prices = {
             VVIP: 100000,
             VIP: 50000,
             Twin: 25000,
             Economy: 20000
         };

         if (this.state.numberOfSeats === 0 || this.state.seatCategory === "") {
             alert("Please enter number of seats OR choose a valid seat category");
             event.preventDefault();
         } else {
             if (this.state.seatCategory === "VVIP") {
                 if (this.state.numberOfSeats > this.state.VVIP) {
                     alert("The number of seats you've selected is more than the available VVIP seats!");
                 } else {
                     var sales = this.state.numberOfSeats * prices.VVIP;
                     if (confirm("Please confirm your transaction")) {
                         this.setState({ subTotal: sales });
                         var subTotal = this.state.subTotal;
                         this.setState({ totalSales: (subTotal + this.state.totalSales) });
                         this.updateSeats();
                     }
                 }
             } else if (this.state.seatCategory === "VIP") {
                 if (this.state.numberOfSeats > this.state.VIP) {
                     alert("The number of seats you've selected is more than the available VIP seats!");
                 } else {
                     var sales = this.state.numberOfSeats * prices.VIP;
                     if (confirm("Please confirm your transaction")) {
                         this.setState({ subTotal: sales });
                         var subTotal = this.state.subTotal;
                         this.setState({ totalSales: (subTotal + this.state.totalSales) });
                         this.updateSeats();
                     }
                 }
             } else if (this.state.seatCategory === "Twin") {
                 if (this.state.numberOfSeats > this.state.Twin) {
                     alert("The number of seats you've selected is more than the available Twin seats!");
                 } else {
                     var sales = this.state.numberOfSeats * prices.Twin;
                     if (confirm("Please confirm your transaction")) {
                         this.setState({ subTotal: sales });
                         var subTotal = this.state.subTotal;
                         this.setState({ totalSales: (subTotal + this.state.totalSales) });
                         this.updateSeats();
                     }
                 }
             } else if (this.state.seatCategory === "Economy") {
                 if (this.state.numberOfSeats > this.state.Economy) {
                     alert("The number of seats you've selected is more than the available Economy seats!");
                 } else {
                     var sales = this.state.numberOfSeats * prices.Economy;
                     if (confirm("Please confirm your transaction")) {
                         this.setState({ subTotal: sales });
                         var subTotal = this.state.subTotal;
                         this.setState({ totalSales: (subTotal + this.state.totalSales) });
                         this.updateSeats();
                     }
                 }
             }
         }
         event.preventDefault();
     }

     updateSeats = () => {
         if (this.state.seatCategory === "VVIP") {
             var current = this.state.VVIP;
             this.setState({ VVIP: (current - this.state.numberOfSeats) });
         } else if (this.state.seatCategory === "VIP") {
             var current = this.state.VIP;
             this.setState({ VIP: (current - this.state.numberOfSeats) });
         } else if (this.state.seatCategory === "Twin") {
             var current = this.state.Twin;
             this.setState({ Twin: (current - this.state.numberOfSeats) });
         } else if (this.state.seatCategory === "Economy") {
             var current = this.state.Economy;
             this.setState({ Economy: (current - this.state.numberOfSeats) });
         }
     }

     getTotalAvailableSeats = () => {
         return (this.state.VVIP + this.state.VIP + this.state.Twin + this.state.Economy);
     }
 }

 export default App;