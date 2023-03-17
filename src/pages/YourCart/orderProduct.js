import React, { Component } from 'react'

export class OrderProduct extends Component {
  render() {
    return (
      <div className="flex mb-5 gap-3 items-center">
        <span className="w-20 h-24 rounded-3xl border">
          img
        </span>
        <div className="mr-auto">
          <h3>Hazelnut Latte</h3>
          <p>x1</p>
          <p>Regular</p>
        </div>
        <h4>IDR 24.k</h4>
      </div>
    )
  }
}

export default OrderProduct