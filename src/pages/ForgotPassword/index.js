import React, { Component, Fragment } from 'react'
import Footer from '../../components/Footer'

export class ForgotPassword extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero-forgot w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl md:text-6xl font-bold">Forgot your password?</h1>
          <p className="text-white text-sm md:text-base font-bold">Dont worry, we got your back!</p>
          <form className="w-full px-[5%] md:px-0 md:w-4/5 max-width flex flex-col items-center">
            <div className="w-full flex flex-col md:flex-row gap-9 my-8 md:my-28">
              <input type="text" id="email" value="" placeholder="Enter your email address to get link" className="input-auth w-full md:h-32 text-base md:text-2xl" />
              <button className="btn min-w-[260px] h-14 md:h-auto rounded-2xl md:text-3xl bg-primary text-secondary">Send</button>
            </div>
            <p className="text-white font-bold md:text-2xl text-center drop-shadow-2xl">Click here if you didn’t receive any link <br></br> in 2 minutes</p>
            <button className="btn text-white bg-secondary h-14 md:h-32 w-full md:w-[554px] md:text-2xl rounded-2xl my-8">Resend Link</button>
            <p className="text-white text-3xl font-bold">01:54</p>
          </form>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export default ForgotPassword