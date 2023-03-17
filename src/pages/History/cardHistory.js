import React, { Component } from 'react'

export class CardHistory extends Component {
  render() {
    return (
      <div className="max-w-[394px] min-h-[130px] pl-5 pr-6 flex rounded-2xl bg-white items-center relative">
        <div className="w-[75px] h-[75px] rounded-full border mr-4">
          <img src="../img/product/veggie-tomato.png.webp" alt="" />
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">Veggie tomato mix</h2>
          <p className="text-secondary">IDR 34.000</p>
          <p className="text-secondary">Delivered</p>
        </div>
        <div className="absolute -top-5 -right-5 flex gap-3">
          <button className="w-11 h-11 rounded-full bg-secondary"><i className="bi bi-trash3 text-white text-lg"></i></button>
          <button className="w-11 h-11 rounded-full bg-primary"><i className="bi bi-x text-secondary text-3xl"></i></button>
        </div>
      </div>
    )
  }
}

export default CardHistory