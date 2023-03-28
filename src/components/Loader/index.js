import React, { Component } from "react";

export class Loader extends Component {
  render() {
    return (
      <div className="w-full top-0 left-0 min-h-[30vh] flex justify-center items-center text-2xl">
        Loading..
      </div>
    );
  }
}

export default Loader;
