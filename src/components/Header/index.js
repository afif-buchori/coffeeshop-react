import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Authentication from "./authentication";
import Account from "./account";

import logoBrand from "../../assets/icon/logo.svg";

export class Header extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    const login = false;
    return (

  <header className="w-full fixed h-14 md:h-28 flex items-center justify-center shadow-lg bg-white z-50">
    <nav className="flex w-full md:w-4/5 mx-4 md:mx-0 max-width">
      <div className="navbrand flex items-center mr-auto gap-4">
        <img src={logoBrand} alt="logo-brand" className="w-8"/>
        <h1 className="text-2xl font-bold">Coffee Shop</h1>
      </div>
      <div className="navbar hidden md:flex items-center gap-10">
        {/* <Link to="/home" className="navlink nav-active">Home</Link> */}
        <Link to="/" className={this.props.activeLink === "home" ? "navlink nav-active" : "navlink"}>Home</Link>
        <Link to="/products" className={this.props.activeLink === "products" ? "navlink nav-active" : "navlink"}>Product</Link>
        <Link to="/yourcart" className={this.props.activeLink === "yourcart" ? "navlink nav-active" : "navlink"}>Your Cart</Link>
        <Link to="/history" className={this.props.activeLink === "history" ? "navlink nav-active" : "navlink"}>History</Link>
      </div>
      <div className="account hidden md:flex items-center gap-10 ml-auto">

        { login ? <Account /> : <Authentication /> }

        {/* <Authentication /> */}
        {/* <Account /> */}

      </div>
      <div className="flex">
        <img src="./img/icon/toggle-menu.svg" alt="" className="w-10 md:hidden"/>
        <img src="./img/icon/close.svg" alt="" className="hidden w-10"/>
      </div>
    </nav>
  </header>

    );
  }
}

export default Header;