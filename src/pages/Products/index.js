import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import MenuLink from './menuLink';

import withSearchParams from "../../utils/wrapper/withParams";
import withNavigate from "../../utils/wrapper/withNavigate";

import CardProducts from "./cardProducts";
// import axios from "axios";
import { getProducts } from "../../utils/https/products";
import Loader from "../../components/Loader";
import DataNotFound from "../../components/DataNotFound";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCategoryActive: false,
      category: "",
      isLoading: true,
      isNotFound: true,
      data: [],
      meta: "",
    };
    this.controller = new AbortController();
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({ toggleCategoryActive: !this.state.toggleCategoryActive });
  }

  handleCategory = (params) => {
    if (params === 0) {
      this.props.setSearchParams({});
      this.setState({
        category: "",
      });
      return;
    }
    this.props.setSearchParams({
      category: params,
    });
    this.setState({
      category: params,
    });
  };

  handlePage = (params) => {
    const urlParams = params.replace("/products?", "");
    const queryParams = new URLSearchParams(urlParams);
    // console.log(Object.fromEntries(queryParams));

    this.props.setSearchParams(Object.fromEntries(queryParams));

    // // eslint-disable-next-line no-undef
    // let url = process.env.REACT_APP_SERVER_HOST + params;
    // axios
    //   .get(url)
    //   .then((res) => {
    //     this.setState({
    //       data: res.data.data,
    //       meta: res.data.meta,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     if (err.response.status === 404) {
    //       console.log(err.response.data);
    //     }
    //     console.log(err.message);
    //   });
  };

  handleShorting = (event) => {
    const selected = event.target.value;
    console.log(selected);
    console.log(Object.fromEntries(this.props.searchParams));
    this.props.setSearchParams({
      category: this.state.category,
      order: selected,
      search: this.props.searchValue || "",
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const prevParams = Object.fromEntries(prevProps.searchParams);
    const newParams = Object.fromEntries(this.props.searchParams);
    if (JSON.stringify(prevParams) !== JSON.stringify(newParams)) {
      this.setState({ isLoading: true });
      this.fetchData();
    }
  }

  fetchData() {
    getProducts(this.props.searchParams, this.controller)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.data,
          meta: res.data.meta,
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          this.setState({
            isLoading: false,
          });
        }
        console.log(err.message);
      });
  }

  handleSearch = (value) => {
    this.props.setSearchParams({
      category: this.state.category,
      search: value,
    });
  };

  render() {
    // console.log(this.state.srcPar);
    // console.log(this.state.meta.next);

    const shorter = Object.fromEntries(this.props.searchParams);

    return (
      <Fragment>
        <Header title="products" searchValue={this.handleSearch} />

        <main className="flex flex-col md:flex-row-reverse w-full mt-14 md:mt-28">
          {/* <!-- MENU PRODUCTS --> */}
          <div className="relative w-full md:w-[65%] flex flex-col px md:pl-10 pb-10 md:mr-[5%] lg:mr-[10%]">
            <span onClick={this.handleToggleMenu} className="toggle-menu">
              Products Category
              <i className="bi bi-caret-down-fill text-2xl"></i>
            </span>
            <ul
              className={
                this.state.toggleCategoryActive
                  ? "nav-menu static"
                  : "nav-menu top-[-100%]"
              }
            >
              <li
                onClick={() => this.handleCategory(0)}
                className={
                  this.state.category === "" ? "navlink menu-active" : "navlink"
                }
              >
                Favorite Product
              </li>
              <li
                onClick={() => this.handleCategory(1)}
                className={
                  this.state.category === 1 ? "navlink menu-active" : "navlink"
                }
              >
                Coffee
              </li>
              <li
                onClick={() => this.handleCategory(2)}
                className={
                  this.state.category === 2 ? "navlink menu-active" : "navlink"
                }
              >
                Non Coffee
              </li>
              <li
                onClick={() => this.handleCategory(3)}
                className={
                  this.state.category === 3 ? "navlink menu-active" : "navlink"
                }
              >
                Foods
              </li>
              <li
                onClick={() => this.handleCategory(4)}
                className={
                  this.state.category === 4 ? "navlink menu-active" : "navlink"
                }
              >
                Add-on
              </li>
            </ul>

            {this.state.isLoading ? (
              ""
            ) : (
              <div className="ml-[5%] my-5">
                <label htmlFor="short">Short By :</label>
                <select onChange={this.handleShorting} name="short" id="short">
                  <option value="" disabled selected={!shorter.order && true}>
                    - - - - -
                  </option>
                  <option
                    value="cheapest"
                    selected={shorter.order === "cheapest" && true}
                  >
                    Cheapest
                  </option>
                  <option
                    value="priciest"
                    selected={shorter.order === "priciest" && true}
                  >
                    Priciest
                  </option>
                </select>
              </div>
            )}

            <div
              className={`w-full ${
                this.state.isNotFound ? "flex" : "grid"
              } grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-[90px] pt-20 px-[5%] sm:px-[10%] md:px-0`}
            >
              {/* <div className="w-full flex flex-wrap gap-[90px] pt-20 ml-[5%] sm:ml-[10%] md:px-0"> */}
              {this.state.isLoading ? (
                <Loader />
              ) : this.state.isNotFound ? (
                <DataNotFound />
              ) : (
                this.state.data.map((product) => (
                  <CardProducts
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    prodName={product.prod_name}
                    price={product.price}
                  />
                  // <CardProducts key={product.id} image={`http://localhost:8080${product.image}`} prodName={product.prod_name} price={product.price} />
                ))
              )}
            </div>
            {this.state.isLoading ? (
              ""
            ) : (
              <div className="ml-[5%] mt-10 text-xl font-bold hover:text-secondary w-fit">
                <button onClick={() => this.handlePage(this.state.meta.prev)}>
                  {this.state.meta.prev === null ? "" : "Prev"}
                </button>
                <button onClick={() => this.handlePage(this.state.meta.next)}>
                  {this.state.meta.next === null ? "" : "Next"}
                </button>
              </div>
            )}
          </div>

          {/* <!-- PROMO SIDE --> */}
          <div className="md:w-[35%] md:min-w-[400px] border-t md:border-t-0 md:border-r border-grey flex flex-col items-center">
            <h1 className="text-2xl font-bold text-secondary mt-7">
              Promo for you
            </h1>
            <p className="text-xs max-w-[240px] text-center my-11">
              Coupons will be updated every weeks. Check them out!
            </p>
            {/* <!-- CARD PROMO --> */}
            <div className="w-[284px] h-[472px] px-4 py-7 flex flex-col rounded-2xl justify-between items-center bg-[#FFCB65]">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img src="../img/product/promo.png.webp" alt="" />
              </div>
              <h2 className="font-bold text-2xl">Beef Spaghetti</h2>
              <h2 className="font-bold text-xl">20% OFF</h2>
              <p className="text-sm text-center">
                Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
              </p>
              <hr className="border border-black border-dashed w-[111%]" />
              <p className="">COUPON CODE</p>
              <h3 className="font-bold text-3xl font-popins">FNPR15RG</h3>
              <h4 className="text-xs">Valid untill October 10th 2020</h4>
            </div>
            <button className="btn w-[284px] h-16 text-white bg-secondary rounded-2xl mt-10 font-popins">
              Apply Coupon
            </button>
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
    );
  }
}

export default withNavigate(withSearchParams(Products));
