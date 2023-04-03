import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardHistory from "./CardHistory";
import { useSelector } from "react-redux";
import { getHistory } from "../../utils/https/transaction";
import Loader from "../../components/Loader";

function History() {
  const controller = useMemo(() => new AbortController(), []);
  const state = useSelector((state) => state.user);
  const [dataHistory, setDataHistory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataHistory = async () => {
    try {
      const result = await getHistory(controller);
      setDataHistory(result.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Coffee Shop - History";
    fetchDataHistory();
  }, []);
  console.log(state);
  console.log(dataHistory);
  return (
    <>
      <Header />
      <main className="hero-history w-full h-auto flex justify-center mt-14 md:mt-28">
        <div className="w-4/5 md:w-[90%] max-width flex flex-col items-center">
          <h1 className="font-bold mt-8 md:mt-20 mb-5 md:mb-10 text-4xl text-center text-white">
            Let’s see what you have bought!
          </h1>
          <p className="text-white mb-8 md:mb-14">Long press to delete item</p>

          {isLoading ? (
            <Loader />
          ) : (
            <div className="w-full justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mb-16">
              {dataHistory.map((product, idx) => (
                <CardHistory
                  key={idx}
                  name={product.prod_name}
                  image={product.image}
                  price={product.price}
                  qty={product.qty}
                  size={product.size_id}
                  methodDeliv={product.method}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default History;
