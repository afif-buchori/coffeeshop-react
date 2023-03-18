import React, { Component, Fragment } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import CardProducts from './cardProducts';

export class Products extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() { 
    const url = "http://localhost:8080/products";
    fetch(url)
    .then((res) => {
      if(!res.ok) throw res.status;
      return res.json();
    })
    .then((db) => {
      this.setState({
        data: db.data,
      })
    })
    .catch((err) => console.log(err.message));
  }

  render() {
    // console.log(this.state.data);

    return (
      <Fragment>
        <Header activeLink="products" />

  <main className="flex flex-col md:flex-row-reverse w-full mt-14 md:mt-28">
    {/* <!-- MENU PRODUCTS --> */}
    <div className="w-full md:w-[65%] flex flex-col px md:pl-10 pb-10 md:mr-[5%] lg:mr-[10%]">
      <div className="nav-menu h-20 hidden md:flex justify-between items-center mx-[5%]">
        <a href="" className="navlink menu-active">Favorite Product</a>
        <a href="" className="navlink">Coffee</a>
        <a href="" className="navlink">Non Coffee</a>
        <a href="" className="navlink">Foods</a>
        <a href="" className="navlink">Add-on</a>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-[90px] pt-20 px-[5%] sm:px-[10%] md:px-0">

        {this.state.data.map(product => (
          <CardProducts key={product.id} image={product.image} prodName={product.prod_name} price={product.price} />
        ))}

      </div>
    </div>

    {/* <!-- PROMO SIDE --> */}
    <div className="md:w-[35%] md:min-w-[400px] border-t md:border-t-0 md:border-r border-grey flex flex-col items-center">
      <h1 className="text-2xl font-bold text-secondary mt-7">Promo for you</h1>
      <p className="text-xs max-w-[240px] text-center my-11">Coupons will be updated every weeks. Check them out!</p>
      {/* <!-- CARD PROMO --> */}
      <div className="w-[284px] h-[472px] px-4 py-7 flex flex-col rounded-2xl justify-between items-center bg-[#FFCB65]">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src="../img/product/promo.png.webp" alt="" />
        </div>
        <h2 className="font-bold text-2xl">Beef Spaghetti</h2>
        <h2 className="font-bold text-xl">20% OFF</h2>
        <p className="text-sm text-center">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
        <hr className="border border-black border-dashed w-[111%]" />
        <p className="">COUPON CODE</p>
        <h3 className="font-bold text-3xl">FNPR15RG</h3>
        <h4 className="text-xs">Valid untill October 10th 2020</h4>
      </div>
      <button className="btn w-[284px] h-16 text-white bg-secondary rounded-2xl mt-10">Apply Coupon</button>
      <div className="mt-28">
        <h5 className="text-sm font-bold">Terms and Condition</h5>
      <ol className="text-sm list-decimal list-inside">
        <li>You can only apply 1 coupon per day</li>
        <li>It only for dine in</li>
        <li>Buy 1 get 1 only for new user</li>
        <li>Should make member card to apply coupon</li>
      </ol>
      </div>
    </div>


  </main>

        <Footer />
      </Fragment>
    )
  }
}

export default Products