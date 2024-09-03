import React from "react";
import "./Loader.css";
import load from "./loader.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={load} alt="" />
    </div>
  );
}

export default Loader;
