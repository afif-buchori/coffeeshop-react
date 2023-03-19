import React, { Component, Fragment } from 'react';
import Footer from "../../components/Footer";

import logoBrand from "../../assets/icon/logo.svg";
import logoGoogle from "../../assets/icon/icon-google.svg";
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(props);
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }
  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState( { [name]: value });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post("http://localhost:8080/auth", { email, password })
    .then((res) => { 
      console.log(res.data);
    })
    .catch((err) => { console.log(err.message) });

    // console.log(this.state.email);
    // console.log(this.state.password);
  }


  render() {
    return (
      <Fragment>

  {/* <!-- HERO --> */}
  <section className="w-full flex flex-col md:flex-row">
    {/* <!-- JUMBOTRON --> */}
    <div className="hero-auth w-full md:w-1/2 absolute md:static h-full md:h-auto -z-50"></div>
    {/* <!-- RIGHT CONTENT --> */}
    <div className="z-1 w-full max-w-[720px] flex flex-col pt-3 md:pt-14 md:mr-[10%] bg-opacity-70 bg-white bg-opacity-5">
      <div className="flex px-[5%] md:pl-14">
        <div className="navbrand flex items-center mr-auto gap-4">
          <img src={logoBrand} alt="logo-brand" className="w-8" />
          <h1 className="text-2xl font-bold">Coffee Shop</h1>
        </div>
        <Link to="/signup" className="btn w-28 md:w-36 h-11 bg-primary text-secondary rounded-3xl shadow shadow-2xl shadow-primary">Sign Up</Link>
      </div>
      {/* <!-- FORM --> */}
      <form action="" onSubmit={this.handleSubmit} className="flex flex-col px-[10%] md:px-0 md:ml-[10%] md:mt-[10%] md:ml-[10%] mb-[26%]">
        <h1 className="font-bold text-2xl md:text-4xl text-secondary my-6 md:mt-0 md:mb-14 text-center">Login</h1>
        <label htmlFor="email" className="font-bold text-xl mb-3">Email Address :</label>
        <input type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter your email address" className="input-auth mb-8" />
        <label htmlFor="password" className="font-bold text-xl mb-3">Password :</label>
        <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter your password" className="input-auth mb-5" />
        <Link to="/forgotpwd" className="mb-14 font-bold text-xl text-secondary">Forgot Password?</Link>
        <button type="submit" className="btn h-14 md:h-[75px] text-xl text-secondary bg-primary rounded-2xl shadow-md shadow-primary mb-7">Login</button>
        <a href="" className="btn h-14 md:h-[75px] text-xl bg-white rounded-2xl shadow-2xl gap-3"><img src={logoGoogle} alt="" className="w-6 md:w-7" /> Login with Google</a>
      </form>
    </div>
  </section>

  {/* <!-- RECLAME --> */}
  <div className="max-width w-4/5">
    <section className="relative top-[-60px] md:top-[-115px] w-full flex justify-center">
      <div className="absolute w-full h-32 md:h-56 p-4 md:px-10 flex flex-col md:flex-row justify-between items-center rounded-xl bg-white shadow-xl max-width">
        <div className="">
          <h1 className="text-lg md:text-4xl font-medium max-w-sm">Check our promo today!</h1>
          <p className="text-xs md:text-base mb-3">Lets see the deals and pick yours!</p>
        </div>
        <a href="" className="btn w-full md:w-64 h-16 flex justify-center items-center rounded-2xl bg-primary shadow-md shadow-primary font-bold text-secondary">See Promo</a>
      </div>
    </section>
  </div>

        <Footer />
      </Fragment>
    )
  }
}

export default Login