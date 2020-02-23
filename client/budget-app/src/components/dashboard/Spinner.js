import React from "react";
import spinner from "../../../src/img/Blocks-1.3s-241px (1).gif";
export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "100px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};