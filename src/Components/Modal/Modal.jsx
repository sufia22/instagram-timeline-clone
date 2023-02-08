import React from "react";
import "./Modal.scss";

const Modal = ({ title, children, hide }) => {
  return (
    <>
      <div className="modal-blur">
        <button
          onClick={() => hide(false)}
          className="hide d-flex justify-content-end"
        >
          <i class="bx bx-x"></i>
        </button>
        <div className="modal-wraper">
          <div className="modal-main">
            <div className="modal-head">
              <h3>{title}</h3>
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
