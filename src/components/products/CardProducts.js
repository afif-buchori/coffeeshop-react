import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CardProducts(props) {
  const navigate = useNavigate();
  const userRedux = useSelector((state) => state.user);

  console.log(userRedux);

  return (
    <div
      onClick={() => navigate(`/products/${props.id}`)}
      className="w-40 h-52 p-4 pt-0 rounded-3xl shadow-lg relative flex flex-col justify-end items-center cursor-pointer hover:scale-[1.1] hover:ease-in-out transition-all"
    >
      <div className="w-32 h-32 top-[-55px] absolute rounded-full overflow-hidden border">
        <img src={props.image} alt="" className="object-cover" />
        {/* w-full h-auto -translate-y-6 */}
      </div>
      <h2 className="font-black text-xl text-center mb-1 font-popins">
        {props.prodName}
      </h2>
      <h3 className="font-bold text-lg text-secondary font-popins">
        IDR {props.price.toLocaleString("id-ID")}
      </h3>
      {userRedux.data && userRedux.data.role_id === 2 && (
        <button className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer absolute bottom-24 -right-4">
          <i className="bi bi-pencil text-xl text-white"></i>
        </button>
      )}
    </div>
  );
}

export default CardProducts;
