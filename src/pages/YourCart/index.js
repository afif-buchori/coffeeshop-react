import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OrderProduct from "./OrderProduct";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import NothingCart from "./NothingCart";

function YourCart() {
  const cartState = useSelector((state) => state.counter);
  const [isLoading, setIsLoading] = useState(false);

  const onCart = cartState.shoppingCart;
  let subtotalOnCart = 0;
  cartState.shoppingCart.forEach((prod) => {
    subtotalOnCart += prod.subtotal;
  });
  const taxFee = subtotalOnCart * 0.05;
  const shipping = 10000;
  const grandTotal = subtotalOnCart + taxFee;
  // console.log(cartState);
  console.log(isLoading, setIsLoading);
  // console.log(subtotalOnCart);
  // console.log(taxFee);
  return (
    <>
      <Header title="yourcart" />

      {isLoading ? (
        <Loader />
      ) : (
        <main className="hero-transaction w-full h-auto flex justify-center mt-14 md:mt-28">
          <div className="w-full md:w-4/5 mx-[5%] md:mx-0 max-width mb-32 flex flex-col items-center">
            <h1 className="font-bold text-2xl md:text-4xl md:self-start text-white drop-shadow-lg my-8 md:my-14">
              Checkout your item now!
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-20 lg:gap-40">
              <div className="flex w-full flex-col p-5 md:p-11 rounded-2xl bg-white">
                <h2 className="font-bold text-xl md:text-3xl mb-16 self-center">
                  Order Summary
                </h2>

                {cartState.shoppingCart.length < 1 ? (
                  <NothingCart />
                ) : (
                  onCart.map((product) => (
                    <OrderProduct
                      key={product.id}
                      img={product.img}
                      prodName={product.prodName}
                      size={product.selectedSize}
                      qty={product.qty}
                      subtotal={product.subtotal}
                    />
                  ))
                )}

                <hr className="border border-grey mb-5" />
                <p className="flex justify-between">
                  {/* SUBTOTAL <span>IDR {cartState.shoppingCart[0].subtotal}</span> */}
                </p>
                <p className="flex justify-between">
                  TAX & FEES <span>IDR {taxFee.toLocaleString("id-ID")}</span>
                </p>
                <p className="flex justify-between">
                  SHIPPING <span>IDR {shipping.toLocaleString("id-ID")}</span>
                </p>
                <h5 className="font-bold text-xl flex justify-between mt-4">
                  TOTAL <span>IDR {grandTotal.toLocaleString("id-ID")}</span>
                </h5>
              </div>

              <div className="flex w-full flex-col">
                <h3 className="font-bold text-2xl text-white drop-shadow-2xl mb-2 md:mb-5">
                  Address details
                </h3>
                <div className="p-5 md:px-11 md:py-9 rounded-2xl bg-white mb-5 md:mb-10">
                  <h4 className="font-bold">
                    Delivery{" "}
                    <span className="font-normal">to Iskandar Street</span>
                  </h4>
                  <p className="border-t border-b border-grey">
                    Km 5 refinery road oppsite republic road, effurun, Jakarta
                  </p>
                  <p>+62 81348287878</p>
                </div>

                <h3 className="font-bold text-2xl text-white drop-shadow-2xl mb-2 md:mb-5">
                  Payment method
                </h3>
                <div className="p-5 md:px-11 md:py-9 rounded-2xl bg-white mb-8">
                  <label
                    htmlFor="card"
                    className="flex items-center gap-2 text-xl my-2 cursor-pointer"
                  >
                    <input type="radio" name="pay-method" id="card" />
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500">
                      <i className="bi bi-credit-card-2-front-fill text-white"></i>
                    </span>
                    Card
                  </label>
                  <label
                    htmlFor="bank"
                    className="flex items-center gap-2 text-xl cursor-pointer py-2 border-t border-b border-grey"
                  >
                    <input type="radio" name="pay-method" id="bank" />
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary">
                      <i className="bi bi-bank2 text-white"></i>
                    </span>
                    Bank Account
                  </label>
                  <label
                    htmlFor="cod"
                    className="flex items-center gap-2 text-xl my-2 cursor-pointer"
                  >
                    <input type="radio" name="pay-method" id="cod" />
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary">
                      <i className="bi bi-truck text-white"></i>
                    </span>
                    Cash on Delivery
                  </label>
                </div>

                <button className="btn h-20 text-xl text-white bg-secondary rounded-2xl shadow-lg shadow-secondary">
                  Confirm and Pay
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}

export default YourCart;
