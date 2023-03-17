import React, { Component, Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export class ProductDetails extends Component {
  render() {
    return (
      <Fragment>
        <Header />

  <section className="flex justify-center w-full mt-14 md:mt-28 bg-slate-100">
    <div className="w-4/5 flex flex-col max-width">
      <ul className="flex mt-10">
        <li>Favorite & Promo</li>
        <li className="font-bold text-secondary"><i className="bi bi-caret-right-fill"></i>Cold Brew</li>
      </ul>
      <div className="flex w-full mb-44 md:gap-16 xl:gap-20  justify-center">
        <div className="flex flex-col items-center">
          <div className="w-[400px] h-[400px] rounded-full border overflow-hidden mt-24 mb-10">
            <img src="../img/product/cold-brew.png.webp" alt="display-product" className="product-img" />
          </div>
          <h1 className="font-black text-6xl text-center mb-5">Cold Brew</h1>
          <p className="font-medium text-4xl mb-8">IDR 30.000</p>
          <button className="btn text-2xl text-white bg-secondary w-full h-20 rounded-2xl mb-6">Add to Cart</button>
          <button className="btn text-2xl text-secondary bg-primary w-full h-20 rounded-2xl">Ask a Staff</button>
        </div>
        <div className="flex flex-col items-center max-w-3xl">
          <div className="flex flex-col rounded-2xl p-20 bg-white">
            <p className="text-secondary text-2xl">Delivery only on <span className="font-bold">Monday to Friday</span> at <span className="font-bold">1 - 7 pm</span></p>
            <p className="text-secondary text-2xl">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeted for as long 48 hours.</p>
            <h3 className="text-2xl font-bold text-center mt-16 mb-10">Choose a size</h3>
            <div className="self-center flex w-full justify-evenly">
              <label htmlFor="r" className="choose-size btn">
                <input type="radio" name="size" id="r" />
                R
                <span></span>
              </label>
              <label htmlFor="l" className="choose-size btn">
                <input type="radio" name="size" id="l" />
                L
                <span></span>
              </label>
              <label htmlFor="xl" className="choose-size btn">
                <input type="radio" name="size" id="xl" />
                XL
                <span></span>
              </label>
            </div>
          </div>
          <h4 className="font-bold text-xl mt-11 mb-5">Choose Delivery Methods</h4>
          <div className="flex w-full gap-5 justify-center">
            <label htmlFor="dine" className="delivery-method">
              <input type="radio" name="delivery-method" id="dine" />
              <span></span>
              <h5>Dine in</h5>
            </label>
            <label htmlFor="door" className="delivery-method">
              <input type="radio" name="delivery-method" id="door" />
              <span></span>
              <h5>Door Delivery</h5>
            </label>
            <label htmlFor="pick" className="delivery-method">
              <input type="radio" name="delivery-method" id="pick" />
              <span></span>
              <h5>Pick up</h5>
            </label>
          </div>
          <div className="mt-10 flex gap-3">
            <label htmlFor="time" className="text-xl">Set time :</label>
            <input type="text" id="time" placeholder="Enter the time you'll arrived" className="bg-transparent text border-b-2 border-secondary py-1 px-1" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="relative top-[-64px] w-full flex justify-center">
    <div className="absolute w-4/5 max-width h-32 gap-10 flex">
      <div className="w-full flex items-center rounded-2xl bg-white px-11 py-8 gap-4">
        <div className="w-24 h-24 rounded-full border overflow-hidden">
          img
        </div>
        <div className="flex flex-col mr-auto">
          <h5 className="font-bold text-2xl">COLD BREW</h5>
          <p>x1 (Large)</p>
          <p>x1 (Large)</p>
        </div>
        <div className="flex gap-8">
          <button className="btn w-10 h-10 rounded-full bg-primary"><i className="bi bi-dash text-3xl"></i></button>
          <h5 className="font-bold text-4xl">2</h5>
          <button className="btn w-10 h-10 rounded-full bg-primary"><i className="bi bi-plus text-3xl"></i></button>
        </div>
      </div>
    <button className="btn w-80 rounded-2xl bg-primary">CHECKOUT</button>
    </div>
  </section>


        <Footer />
      </Fragment>
    )
  }
}

export default ProductDetails