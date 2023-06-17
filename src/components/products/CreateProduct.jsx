import React, { useState } from "react";

function CreateProduct({ onClose }) {
  const [prodName, setProdName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const dataCategory = [
    { id: 1, info: "Coffee" },
    { id: 2, info: "Non Coffee" },
    { id: 3, info: "Foods" },
  ];

  return (
    <section className="fixed z-20 top-0 left-0 w-screen h-screen bg-slate-800/80 flex justify-center items-center">
      <div className="w-[600px] rounded-md bg-white p-5 items-center flex flex-col gap-5 mt-24">
        <h1 className="font-bold text-2xl">Create New Product</h1>
        <div className="w-72 h-72 rounded-full bg-slate-400"></div>
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="font-bold text-xl text-secondary">
            Name :
          </label>
          <input
            type="text"
            id="name"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
            placeholder="Enter new product name"
            className="outline-none border-b-2 border-secondary focus:border-primary py-2 px-1"
          />
        </div>
        <div className="w-full flex gap-4">
          {dataCategory.map((item) => (
            <div
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`px-4 py-2 rounded-full cursor-pointer ${
                category === item.id && "border-4 border-secondary"
              } bg-primary flex justify-center items-center border-4 border-primary`}
            >
              <p className="font-bold text-2xl">{item.info}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="price" className="font-bold text-xl text-secondary">
            Price :
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price product"
            className="outline-none border-b-2 border-secondary focus:border-primary py-2 px-1"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="desc" className="font-bold text-xl text-secondary">
            Description :
          </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter description product"
            className="outline-none border-b-2 border-secondary focus:border-primary py-2 px-1"
          />
        </div>
        <div className="w-full flex gap-5">
          <button
            onClick={() => onClose()}
            className="btn flex-1 h-14 rounded-2xl text-secondary bg-primary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn flex-1 h-14 rounded-2xl text-white bg-secondary"
          >
            Save Change
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateProduct;
