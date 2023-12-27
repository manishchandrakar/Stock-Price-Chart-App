// src/Stocks.js
import React, { useState, useEffect } from 'react';
import './CSS/Stocks.css';
import StockChart from './StockChart';

const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = './stocks.json';
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setStockData(data);
        setIsLoading(false);

        console.log('Fetching data...',data);
        
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    // Add debug output
    
    
  }, []);

  return (
    <div className="stock-container">
      <h2>My Company  Data</h2>
      {isLoading && <p className="loading-text">Loading  data...</p>}
      {error && <p className="error-message">Error: {error.message}</p>}
      {stockData.length > 0 && (
        <div>
          <StockChart stockData={stockData} />
          <table className="stock-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Company Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Percent Change</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock) => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.companyName}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.change.toFixed(2)}</td>
                  <td>{stock.percentChange}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Stocks;
