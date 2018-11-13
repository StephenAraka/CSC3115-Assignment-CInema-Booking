 /* eslint-disable */
 import React, { Component, createElement } from 'react';
 import BootstrapTable from 'react-bootstrap-table-next';
 import logo from './logo.svg';
 import './bootstrap/css/bootstrap.min.css';
 import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
 import './App.css';
 import { data, columns } from "./Utils";

 class App extends Component {
     constructor(props) {
         super(props);
         this.readTextFile = this.readTextFile.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);

         this.state = {
             prices: "",
             welcome: "",
             value: ""
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
                     this.createForm()
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

     handleChange(event) {
         this.setState({ value: event.target.value });
     }

     handleSubmit(event) {
         alert('A name was submitted: ' + this.state.value);
         event.preventDefault();
     }

     createForm = () => {
         return (
             createElement("form", { onSubmit: this.handleSubmit },
                 createElement("label", {}, "Name:",
                     createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange })),
                 createElement("input", { type: "submit", value: "Submit" }))
         );
     }
 }
 export default App;