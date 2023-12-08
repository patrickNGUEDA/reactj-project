import React from 'react';

const ModalVilla = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
      if (e.target.id === "wrapper") onClose();
    };
    return (
        <div>
            <div
      className="fixed inset-0 bg-Cprimary bg-opacity-25 backdrop-blur-sm flex justify-center mt-20 overflow-scroll w-screen  "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="lg:w-[1200px] 2xl:w-[1500px] w-96 mt-10 flex flex-col ">
        <button
          className="text-white text-xl place-self-end px-2 "
          onClick={() => onClose()}
        >
          X 
        </button>
        <div className="bg-white p-2 rounded">{children} </div>
        
      </div>
    </div>
        </div>
    );
};

export default ModalVilla;