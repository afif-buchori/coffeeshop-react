import React, { Component } from "react";

export class Loader extends Component {
  render() {
    return (
      <div className="text-2xl w-full min-h-[50vh] justify-center items-center font-semibold">
        Loading..
      </div>
    );
  }
}

export default Loader;
