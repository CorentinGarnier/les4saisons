import React from "react";
import { useState } from "react";
import "./css/Button.css";

function Modal({ label, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  if (!open)
    return (
      <button className="button" onClick={() => toggle()}>
        {label}
      </button>
    );
  return (
    <div className="">
      <div className="content">{children}</div>
      <div className="">
        <button className="button" onClick={() => toggle()}>
          OK, je vais attendre encore un peu...
        </button>
      </div>
    </div>
  );
}

export default Modal;
