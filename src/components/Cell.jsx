import React from "react";
import "./cell.css";

const Cell = ({ value, onUpdate }) => {
  return <input className="cell" onChange={onUpdate} value={value} />;
};

export default Cell;
