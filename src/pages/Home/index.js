import React, { Component, Fragment } from 'react';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>Home</div>
        <Footer />
      </Fragment>
    )
  }
}

export default Home