import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import DataNotFound from "../../components/DataNotFound";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";

import { getProductsDetails } from "../../utils/https/products";
import { counterAction } from "../../redux/slices/counter";
import ModalMsg from "../../components/ModalMgs";
import ModaltoCart from "../../components/ModalMgs/ModaltoCart";

function ProductDetails() {
  const controller = React.useMemo(() => new AbortController(), []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCart, setIsModalCart] = useState(false);

  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState();
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(1);
  const selectedDelivery = useSelector((state) => state.counter.delivery);
  const notes = useSelector((state) => state.counter.notes);

  const fetchData = async (id) => {
    try {
      const result = await getProductsDetails(id, controller);
      setDataProduct(result.data.data);
      setIsLoading(false);
      setIsNotFound(false);
    } catch (error) {
      if (error.response.status === 404) {
        setIsNotFound(true);
        setIsLoading(false);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Coffee Shop - Product Details";
    fetchData(id);
  }, [id]);

  const changeSize = (event) => {
    setSelectedSize(event.target.value);
    console.log(event.target.value);
  };
  const noteHandler = (event) => {
    dispatch(counterAction.notes(event.target.value));
  };
  const changeDelivery = (event) => {
    // setSelectedDelivery(event.target.value);
    // console.log(selectedDelivery);
    dispatch(counterAction.deliveryMethod(event.target.value));
  };
  const plusQty = () => {
    const newQty = qty + 1;
    setQty(newQty);
  };
  const minQty = () => {
    if (qty === 0) return;
    const newQty = qty - 1;
    setQty(newQty);
  };

  const addtoCartHandler = () => {
    const subtotal = dataProduct.price * qty;
    const img = dataProduct.image;
    const prodName = dataProduct.prod_name;
    const cart = {
      product_id: parseInt(id),
      img,
      prodName,
      size_id: parseInt(selectedSize),
      qty,
      subtotal,
    };
    dispatch(counterAction.addtoCart(cart));
    setIsModalCart(true);
  };

  const checkoutHandler = () => {
    if (selectedDelivery.length < 1) return setIsModalOpen(true);
    addtoCartHandler();
    navigate("/yourcart");
  };

  const handleCloseCart = () => {
    setIsModalCart(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // console.log(selectedSize);
  // console.log(dataProduct);
  return (
    <>
      <Header title="products" />
      {isLoading ? (
        <Loader />
      ) : isNotFound ? (
        <div className="w-full flex h-auto mt-14 md:mt-28">
          <DataNotFound />
        </div>
      ) : (
        <>
          <section className="flex justify-center w-full mt-14 md:mt-28 bg-slate-100">
            <div className="w-4/5 flex flex-col max-width">
              <ul className="flex mt-10">
                <Link to="/products">{dataProduct.category}</Link>
                <li className="font-bold text-secondary ml-1">
                  &gt; {dataProduct.prod_name}
                </li>
              </ul>
              <div className="flex flex-col md:flex-row w-full mb-60 md:mb-44 md:gap-16 xl:gap-20 justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-60 h-60 md:w-[400px] md:h-[400px] rounded-full border overflow-hidden mt-10 md:mt-24 mb-4 md:mb-10">
                    <img
                      src={dataProduct.image}
                      alt="display-product"
                      className="w-full"
                    />
                  </div>
                  <h1 className="font-black text-4xl md:text-6xl text-center md:mb-5">
                    {dataProduct.prod_name}
                  </h1>
                  <p className="font-medium text-2xl md:text-4xl mb-8">
                    IDR {dataProduct.price.toLocaleString("id-ID")}
                  </p>
                  <button
                    onClick={addtoCartHandler}
                    className="btn text-2xl text-white bg-secondary w-full h-20 rounded-2xl mb-6"
                  >
                    Add to Cart
                  </button>
                  <ModaltoCart
                    msg={dataProduct.prod_name + " Added..."}
                    isOpen={isModalCart}
                    onClose={handleCloseCart}
                  />
                  <button className="btn text-2xl text-secondary bg-primary w-full h-20 rounded-2xl">
                    Ask a Staff
                  </button>
                </div>
                <div className="flex flex-col mt-8 md:mt-0 items-center max-w-3xl">
                  <div className="flex flex-col rounded-2xl p-5 md:p-20 bg-white">
                    <p className="text-secondary md:text-2xl">
                      Delivery only on{" "}
                      <span className="font-bold">Monday to Friday</span> at{" "}
                      <span className="font-bold">1 - 7 pm</span>
                    </p>
                    <p className="text-secondary md:text-2xl">
                      Cold brewing is a method of brewing that combines ground
                      coffee and cool water and uses time instead of heat to
                      extract the flavor. It is brewed in small batches and
                      steeted for as long 48 hours.
                    </p>
                    <h3 className="text-2xl font-bold text-center mt-9 md:mt-16 mb-4 md:mb-10">
                      Choose a size
                    </h3>
                    <div className="self-center flex w-full justify-evenly">
                      <label htmlFor="r" className="choose-size btn">
                        <input
                          type="radio"
                          name="size"
                          id="r"
                          value={1}
                          onChange={changeSize}
                        />
                        R<span></span>
                      </label>
                      <label htmlFor="l" className="choose-size btn">
                        <input
                          type="radio"
                          name="size"
                          id="l"
                          value={2}
                          onChange={changeSize}
                        />
                        L<span></span>
                      </label>
                      <label htmlFor="xl" className="choose-size btn">
                        <input
                          type="radio"
                          name="size"
                          id="xl"
                          value={3}
                          onChange={changeSize}
                        />
                        XL
                        <span></span>
                      </label>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl mt-11 mb-5">
                    Choose Delivery Methods
                  </h4>
                  <div className="flex w-full gap-5 justify-center">
                    <label htmlFor="dine" className="delivery-method">
                      <input
                        type="radio"
                        name="delivery-method"
                        id="dine"
                        value={1}
                        onChange={changeDelivery}
                        checked={selectedDelivery == 1}
                      />
                      <span></span>
                      <h5>Dine in</h5>
                    </label>
                    <label htmlFor="door" className="delivery-method">
                      <input
                        type="radio"
                        name="delivery-method"
                        id="door"
                        value={2}
                        onChange={changeDelivery}
                        checked={selectedDelivery == 2}
                      />
                      <span></span>
                      <h5>Door Delivery</h5>
                    </label>
                    <label htmlFor="pick" className="delivery-method">
                      <input
                        type="radio"
                        name="delivery-method"
                        id="pick"
                        value={3}
                        onChange={changeDelivery}
                        checked={selectedDelivery == 3}
                      />
                      <span></span>
                      <h5>Pick up</h5>
                    </label>
                  </div>
                  <div className="mt-10 flex w-full justify-center items-center gap-3">
                    <label htmlFor="time" className="md:text-xl">
                      Set time :
                    </label>
                    <input
                      type="text"
                      id="time"
                      name="note"
                      value={notes}
                      onChange={noteHandler}
                      placeholder="Enter the time you'll arrived"
                      className="w-56 bg-transparent text border-b-2 border-secondary py-1 px-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative top-[-200px] md:top-[-64px] w-full flex justify-center">
            <div className="absolute w-4/5 max-width md:h-32 gap-5 md:gap-10 flex flex-col md:flex-row">
              <div className="qty-card w-full grid grid-cols-2 justify-items-center md:flex items-center rounded-2xl bg-white p-5 md:px-11 md:py-8 gap-4">
                <div className="w-24 h-24 rounded-full border overflow-hidden">
                  <img
                    src={dataProduct.image}
                    alt="display-product"
                    className="product-img"
                  />
                </div>
                <div className="flex flex-col mr-auto">
                  <h5 className="font-bold text-base md:text-2xl">
                    {dataProduct.prod_name}
                  </h5>
                  <p className="text-xs md:text-base">
                    x{qty} (
                    {selectedSize == 3
                      ? "Extra Large"
                      : selectedSize == 2
                      ? "Large"
                      : "Regular"}
                    )
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <button
                    onClick={minQty}
                    className="btn w-10 h-10 rounded-full bg-primary"
                  >
                    <i className="bi bi-dash text-3xl"></i>
                  </button>
                  <h5 className="font-bold text-2xl md:text-4xl">{qty}</h5>
                  <button
                    onClick={plusQty}
                    className="btn w-10 h-10 rounded-full bg-primary"
                  >
                    <i className="bi bi-plus text-3xl"></i>
                  </button>
                </div>
              </div>
              <button
                onClick={checkoutHandler}
                className="btn md:w-80 h-20 md:h-auto rounded-2xl bg-primary"
              >
                CHECKOUT
              </button>
              <ModalMsg
                msg="Delivery Method Not Selected"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
              />
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  );
}

export default ProductDetails;
