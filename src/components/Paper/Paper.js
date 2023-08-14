import React from "react";

import style from "./Paper.module.css";

export default function Paper({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
}
