import React, { Component, Fragment } from 'react';

export class Account extends Component {
  render() {
    return (
      <Fragment>
        <div className="cursor-pointer">
          <img src="../img/icon/search.svg" alt="" className="w-7" />
        </div>
        <div className="relative cursor-pointer">
          <span className="flex w-4 h-4 rounded-full justify-center items-center text-[8px] text-white bg-secondary absolute -top-2 -left-2">1</span>
          <img src="../img/icon/chat.svg" alt="" className="w-7" />
        </div>
        <div className="w-8 h-8 rounded-full border overflow-hidden cursor-pointer">
          <img src="../img/user.png.webp" alt="" />
        </div>
      </Fragment>
    )
  }
}

export default Account