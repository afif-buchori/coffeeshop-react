import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import logoBrand from "../../assets/icon/logo.svg";

import FormSignup from "./formSignup";

export class Signup extends Component {
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
        <Link to="/login" className="btn w-28 md:w-36 h-11 bg-primary text-secondary rounded-3xl shadow shadow-2xl shadow-primary">Login</Link>
      </div>
      {/* <!-- FORM --> */}
      <FormSignup />
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

export default Signup