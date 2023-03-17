import React, { Component } from 'react'
import logoGoogle from "../../assets/icon/icon-google.svg";

export class FormSignup extends Component {
  render() {
    return (
      <form action="" className="flex flex-col px-[10%] md:px-0 md:ml-[10%] md:mt-[10%] md:ml-[10%] mb-[26%]">
        <h1 className="font-bold text-2xl md:text-4xl text-secondary my-6 md:mt-0 md:mb-14 text-center">Sign Up</h1>
        <label htmlFor="email" className="font-bold text-xl mb-3">Email Address :</label>
        <input type="text" id="email" value="" placeholder="Enter your email address" className="input-auth mb-8" />
        <label htmlFor="password" className="font-bold text-xl mb-3">Email Address :</label>
        <input type="password" id="password" value="" placeholder="Enter your password" className="input-auth mb-8" />
        <label htmlFor="phone" className="font-bold text-xl mb-3">Phone Number :</label>
        <input type="text" id="phone" value="" placeholder="Enter your phone number" className="input-auth mb-8" />
        <button className="btn h-14 md:h-[75px] text-xl text-secondary bg-primary rounded-2xl shadow-md shadow-primary mb-7">Sign Up</button>
        <a href="" className="btn h-14 md:h-[75px] text-xl bg-white rounded-2xl shadow-2xl"><img src={logoGoogle} alt="" className="w-7" /> Sign Up with Google</a>
      </form>
    )
  }
}

export default FormSignup