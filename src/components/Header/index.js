import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Authentication from "./authentication";
import Account from "./account";

import logoBrand from "../../assets/icon/logo.svg";
import toggleNav from "../../assets/icon/toggle-menu.svg"
import toggleClose from "../../assets/icon/close.svg"

export class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      isLogin: false,
      toggleActive: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
    console.log(props);
  }

  handleToggle() {
    this.setState({ toggleActive: !this.state.toggleActive })
  }

  render() {
    // console.log(this.state);
    return (

  <header className="w-full fixed h-14 md:h-28 flex items-center justify-center shadow-lg bg-white z-50">
    <nav className="flex w-full md:w-4/5 mx-4 md:mx-0 max-width">
      <div className="navbrand flex items-center mr-auto gap-4">
        <img src={logoBrand} alt="logo-brand" className="w-8"/>
        <h1 className="text-2xl font-bold">Coffee Shop</h1>
      </div>
      <div className={this.state.toggleActive ? "navbar right-0" : "navbar right-[-150%]"}>
        {/* <Link to="/home" className="navlink nav-active">Home</Link> */}
        <Link to="/" className={this.props.title === "home" ? "navlink nav-active" : "navlink"}>Home</Link>
        <Link to="/products" className={this.props.title === "products" ? "navlink nav-active" : "navlink"}>Product</Link>
        <Link to="/yourcart" className={this.props.title === "yourcart" ? "navlink nav-active" : "navlink"}>Your Cart</Link>
        <Link to="/history" className={this.props.title === "history" ? "navlink nav-active" : "navlink"}>History</Link>
      </div>
      <div className={this.state.toggleActive === true ? "account right-0" : "account right-[-150%]"}>

        { this.state.isLogin ? <Account /> : <Authentication /> }

        {/* <Authentication /> */}
        {/* <Account /> */}

      </div>
      <div onClick={this.handleToggle} className="toggle cursor-pointer flex">
        <img src={this.state.toggleActive ? toggleClose : toggleNav} alt="" className="w-10 md:hidden"/>
      </div>
    </nav>
  </header>

    );
  }
}

export default Header;