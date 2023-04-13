import React from "react";

function Promos(props) {
  return (
    <div className="card-promos">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src={props.img} alt="" />
      </div>
      <h2 className="font-bold text-2xl">{props.prodName}</h2>
      <h2 className="font-bold text-xl">{props.discount}% OFF</h2>
      <p className="text-sm text-center">
        {props.desc || "Buy 1 Choco Oreo and get 20% off for Beef Spaghetti"}
      </p>
      <hr className="border border-black border-dashed w-[111%]" />
      <p className="">COUPON CODE</p>
      <h3 className="font-bold text-3xl font-popins">{props.code}</h3>
      <h4 className="text-xs">
        Valid untill{" "}
        {new Date(props.expired).toDateString("id-ID") || "22-10-2023"}
      </h4>
    </div>
  );
}

export default Promos;
