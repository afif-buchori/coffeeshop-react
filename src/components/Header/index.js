import React, { Component } from 'react';
// import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="w-full fixed h-14 md:h-28 flex items-center justify-center shadow-lg bg-white z-50">
        <nav className="flex w-full md:w-4/5 mx-4 md:mx-0 max-width">
          <div className="navbrand flex items-center mr-auto gap-4">
            <img src="./img/icon/logo.svg" alt="logo-brand" className="w-8"/>
            <h1 className="text-2xl font-bold">Coffee Shop</h1>
          </div>
          <div className="navbar hidden md:flex items-center gap-10">
            <a href="#" className="navlink nav-active">Home</a>
            <a href="./products/" className="navlink">Product</a>
            <a href="#" className="navlink">Your Cart</a>
            <a href="#" className="navlink">History</a>
          </div>
          <div className="account hidden md:flex items-center gap-10 ml-auto">
            <a href="./authentication/login.html" className="btn font-medium">Login</a>
            <a href="#" className="btn font-medium w-36 h-11 flex items-center justify-center rounded-3xl bg-primary text-secondary drop-shadow-lg">Sign Up</a>
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