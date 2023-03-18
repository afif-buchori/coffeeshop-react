import React, { Component, Fragment } from 'react';
import iconSearch from "../../assets/icon/search.svg";
import iconChat from "../../assets/icon/chat.svg";
import { Link } from 'react-router-dom';

export class Account extends Component {
  render() {
    return (
      <Fragment>
        <div className="cursor-pointer">
          <img src={iconSearch} alt="" className="w-7" />
        </div>
        <div className="relative cursor-pointer">
          <span className="flex w-4 h-4 rounded-full justify-center items-center text-[8px] text-white bg-secondary absolute -top-2 -left-2">1</span>
          <img src={iconChat} alt="" className="w-7" />
        </div>
        <Link to="/profile" className="w-8 h-8 rounded-full border overflow-hidden cursor-pointer">
          <img src="../img/user.png.webp" alt="" />
        </Link>
      </Fragment>
    )
  }
}

export default Account