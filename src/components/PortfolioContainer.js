import React from "react";
import Stock from "./Stock";

function PortfolioContainer({remove, stocks}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map(( stock ) => <Stock handleClick={remove} key={stock.id} stock={stock}  />)}
    </div>
  );
}

export default PortfolioContainer;
