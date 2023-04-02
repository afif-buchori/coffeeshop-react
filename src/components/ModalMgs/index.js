import React from "react";

function ModalMsg({ isOpen, onClose, msg }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed z-50 w-screen h-screen bg-slate-800/90 flex justify-center items-center top-0 left-0"
        >
          <div className="w-4/5 md:w-1/3 py-10 px-6 flex flex-col rounded-xl bg-white">
            <h1 className="text-4xl py-10 text-center text-secondary font-bold">
              {msg}
            </h1>
            <button className="btn mt-10 bg-primary rounded-md py-3">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalMsg;
