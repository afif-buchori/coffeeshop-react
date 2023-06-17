import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateProduct from "./CreateProduct";

function BtnCreateNew() {
  const userRedux = useSelector((state) => state.user);
  const [isOpen, setOpen] = useState(false);
  const [openCreateProd, setOpenProd] = useState(false);

  return (
    <>
      {userRedux.data && userRedux.data.role_id === 2 && (
        <div className="relative pl-4">
          <button
            onClick={() => setOpen(!isOpen)}
            className="btn w-12 h-12 flex justify-center items-center rounded-full bg-secondary cursor-pointer sticky bottom-24 right-24"
          >
            <i className="bi bi-plus text-white text-4xl"></i>
          </button>
          {isOpen && (
            <div className="absolute left-20 -bottom-8 bg-primary flex flex-col p-4 rounded-lg gap-2">
              <button
                onClick={() => {
                  setOpen(false);
                  setOpenProd(true);
                }}
                className="btn px-3 py-1 rounded"
              >
                Create New Product
              </button>
              <button className="btn px-3 py-1 rounded">
                Create New Promo
              </button>
            </div>
          )}
          {openCreateProd && (
            <CreateProduct onClose={() => setOpenProd(false)} />
          )}
        </div>
      )}
    </>
  );
}

export default BtnCreateNew;
