import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


// Components:
import App from "./Apps";
// import Navbar from "./components/Navbar/Navbar";
// import CompanyList from "./components/Company/CompanyList";
// import CompanyForm from "./components/Company/CompanyForm";
// import LoginForm from "./components/Login/LoginForm";
// import RegisterForm from "./components/Register/RegisterForm";
// import Nav from './components/Nav';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayed_form: '',
//       logged_in: localStorage.getItem('token') ? true : false,
//       username: ''
//     };
//   }

// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


