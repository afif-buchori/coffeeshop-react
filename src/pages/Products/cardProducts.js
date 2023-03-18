import React, { Component } from 'react'

export class CardProducts extends Component {
  // constructor(props) {
  //   super();
  //   console.log(props);
  // }
  render() {
    return (
      <div className="w-40 h-52 p-4 pt-0 rounded-3xl shadow-lg relative flex flex-col justify-end items-center">
        <div className="w-32 h-32 top-[-55px] absolute rounded-full overflow-hidden border">
          <img src="../img/product/veggie-tomato.png.webp" alt="" className="w-full h-auto -translate-y-6" />
        </div>
        <h2 className="font-black text-xl text-center mb-1">{this.props.prodName}</h2>
        <h3 className="font-bold text-lg text-secondary">IDR {this.props.price}</h3>
      </div>
    )
  }
}

export default CardProducts