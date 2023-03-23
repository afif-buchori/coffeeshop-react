import React, { Component, Fragment } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardHistory from './cardHistory';

export class index extends Component {
  render() {
    return (
      <Fragment>
        <Header title="history" />
          <main className="hero-history w-full h-auto flex justify-center mt-14 md:mt-28">
            <div className="w-4/5 md:w-[90%] max-width flex flex-col items-center">
              <h1 className="font-bold text-4xl text-center text-white">Let’s see what you have bought!</h1>
              <p className="text-white">Long press to delete item</p>

              <div className="w-full justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mb-8">

                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />
                <CardHistory />

              </div>

            </div>
          </main>
        <Footer />
      </Fragment>
    )
  }
}

export default index