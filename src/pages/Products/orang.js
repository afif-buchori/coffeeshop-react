import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardPromo from '../../components/CardPromo';
import CardProduct from '../../components/CardProduct'
import WithSearchParams from '../../utils/wrapper/WithSearchParams'
import { getProducts } from '../../utils/https/Products'
import Loaders from '../../components/Loaders/'
import _ from 'lodash'
// import Loaders from '../../components/Loaders/index';
import withNavigate from "../../utils/wrapper/WithNavigate";
import '../../styles/products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    };
    this.controller = new AbortController();
  }
  paramsCoffe = () => {
    this.props.setSearchParams({
      categories: 1,
    });
  };
  paramsFavorite = () => {
    this.props.setSearchParams({
      categories: "",
    });
  };
  paramsNonCoffe = () => {
    this.props.setSearchParams({
      categories: 2,
    });
  };
  paramsFoods = () => {
    this.props.setSearchParams({
      categories: 3,
    });
  };
  paramsAddOn = () => {
    this.props.setSearchParams({
      categories: 4,
    });
  };
  categoriesRequest = (event) => {
    let target = event.target.value;
    if (target == 0) {
      this.props.setSearchParams({
        categories: "",
      });
      return;
    }
    if (target == 1) {
      this.props.setSearchParams({
        categories: 1,
      });
    }
    if (target == 2) {
      this.props.setSearchParams({
        categories: 2,
      });
    }
    if (target == 3) {
      this.props.setSearchParams({
        categories: 3,
      });
    }
    if (target == 4) {
      this.props.setSearchParams({
        categories: 4,
      });
    }
  };
  sortingRequest = (event) => {
    let target = event.target.value;
    if(target == "default") {
      this.props.setSearchParams({
        order: "",
      })
    }
    if(target == "priciest") {
      this.props.setSearchParams({
        order: "priciest",
      });
    }
    if(target == "cheapest") {
      this.props.setSearchParams({
        order: "cheapest",
      });
    }
  }
  handleNavigate(to) {
    this.props.navigate(to);
  }

  handleSearch = (value) => {
    this.props.setSearchParams({
      name: value
    })
  }
  async componentDidUpdate(prevProps) {
    const prevSearchParams = Object.fromEntries(prevProps.searchParams);
    const currentSearchParams = Object.fromEntries(this.props.searchParams);
    if (!_.isEqual(prevSearchParams, currentSearchParams)) {
      this.setState({
        isLoading: true,
      });
      await getProducts(this.controller, this.props.searchParams)
        .then(({ data }) =>
          this.setState({
            // isLoading: true,
            data: data.data,
          })
          // console.log(data.data)
        )
        .catch((err) => console.log(err))
        .finally(() =>
          this.setState({
            isLoading: false,
          })
        );
    }
    // console.log("No Change");
  }
  async componentDidMount() {
    // function fecthData = () => {}
    this.setState({
      isLoading: true,
    });
    await getProducts(this.controller, this.props.searchParams)
      .then(({ data }) =>
        this.setState({
          // isLoading: true,
          data: data.data,
        })
      )
      .catch((err) => console.log(err))
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  }
  render() {
    // console.log(Object.fromEntries(this.props.searchParams));
    return (
      <>
        <Header searchValue={this.handleSearch} />
        <main>
          <div className="lg:flex">
            {/* <!-- section left --> */}
            <div className="container-bigCard px-8 border-r-2 border-solid border-[#d4d4d4] lg:px-12">
              <section className="bigCard py-8 mb-12">
                <div className="bigCard-center">
                  <h1 className="text-center text-brown-cs text-3xl font-bold mb-6">
                    Promo Today
                  </h1>
                  <p className="text-center mb-12">
                    Coupons will be updated every weeks. <br /> check them out!
                  </p>
                  <div className="w-full flex flex-col">
                    <div className="flex flex-col text-black gap-8 mb-12 md:w-[70%] md:self-center md:gap-12 lg:w-[120%]">
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#88B788]"
                        profile="bg-promo-1"
                      />
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#F5C361]"
                        profile="bg-promo-2"
                      />
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#88B788]"
                        profile="bg-promo-1"
                      />
                      <CardPromo
                        title="HAPPY MOTHER’S DAY!"
                        desc="Get one of our favorite menu for free!"
                        bg="bg-[#C59378]"
                        profile="bg-promo-4"
                      />
                    </div>
                    <div className="w-full flex justify-center mt-4">
                      <button className="py-4 px-8 bg-brown-cs text-white self-center w-[100%] font-bold text-lg rounded-xl mb-16 md:w-[70%] lg:w-[100%]">
                        Apply Coupon
                      </button>
                    </div>
                    <div className="px-6 md:px-8 lg:px-0">
                      <h3 className="font-bold text-grey-custom text-lg">
                        Terms and Condition
                      </h3>
                      <ol className="text-grey-custom lg:px-0">
                        <li>1. You can only apply 1 coupon per day</li>
                        <li>2. it only for dine in</li>
                        <li>3. Buy 1 get 1 only for new user</li>
                        <li>4. Should make member card to apply coupon</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <hr className="hidden lg:block" />
            {/* <!-- section right --> */}
            <div className="w-full px-6 md:px-8 lg:px-4">
              <section className="product">
                <nav className="promoNav mb-28">
                  <div className="flex justify-center lg:hidden">
                    <select
                      name="menu-favorite"
                      id=""
                      className="border-b-2 border-solid border-brown-cs cursor-pointer font-semibold text-brown-cs"
                      onChange={this.categoriesRequest}>
                      <option value="0">Favorite & Promo</option>
                      <option value="1">Coffe</option>
                      <option value="2">Non Coffe</option>
                      <option value="3">Foods</option>
                      <option value="4">Add-on</option>
                    </select>
                  </div>
                  <ul className="hidden lg:flex lg:justify-around lg:pt-8 lg:text-[#9F9F9F]">
                    <li
                      className="cursor-pointer"
                      onClick={this.paramsFavorite}>
                      Favorite & Promo
                    </li>
                    <li className="cursor-pointer" onClick={this.paramsCoffe}>
                      Coffee
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={this.paramsNonCoffe}>
                      Non Coffee
                    </li>
                    <li className="cursor-pointer" onClick={this.paramsFoods}>
                      Foods
                    </li>
                    <li className="cursor-pointer" onClick={this.paramsAddOn}>
                      Add-on
                    </li>
                  </ul>
                  <div>
                    <select
                      className="border-b-2 border-solid border-brown-cs cursor-pointer font-semibold text-brown-cs"
                      onChange={this.sortingRequest} defaultValue="default">
                      <option value="default">Default</option>
                      <option value="priciest">priciest</option>
                      <option value="cheapest">cheapest</option>
                    </select>
                  </div>
                </nav>
                <div className="grid grid-cols-2 mb-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:gap-0">
                  {this.state.isLoading == true ? (
                    <div className="w-full flex justify-center items-center">
                      <Loaders />
                    </div>
                  ) : (
                    false
                  )}
                  {this.state.data.map((product) => {
                    return (
                      <CardProduct
                        name={product.product_name}
                        key={product.id}
                        img={product.image}
                        price={product.price}
                        onClick={() => this.handleNavigate("/details")}
                      />
                    );
                  })}
                </div>
                <div className="w-full flex justify-center gap-8 my-12 pr-8">
                  <button className="btn">prev</button>
                  <button className="btn">next</button>
                </div>
                <p className="text-brown-cs font-semibold mb-12 pl-2">
                  *the price has been cutted by discount appears
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
        {/* <Loaders /> */}
      </>
    );
  }
}

export default withNavigate(WithSearchParams(Products));