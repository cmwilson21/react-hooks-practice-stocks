import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [clickedStocks, setClickedStocks] = useState([])


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(data => setStocks(data))
  }, [])

  const handleClick = (stock) => {
    setClickedStocks([...clickedStocks, stock])
    console.log(stock)
  }

  const removeStock = (stock) => {
    const newList = clickedStocks.filter((clickedStock) => stock.id !== clickedStock.id);
    setClickedStocks(newList)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer handleClick={handleClick} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={clickedStocks} remove={removeStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
