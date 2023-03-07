import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("your api key was there ");
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h3>Covid-19 Tracker</h3>
      </div>
      {data ? (
        <div className="data-container">
          <div className="data-card">
            <h2>Total Cases</h2>
            <p>{data.cases.toLocaleString()}</p> <hr></hr>
          </div>
          <div className="data-card">
            <h2>Total Deaths</h2>
            <p>{data.deaths.toLocaleString()}</p>
            <hr></hr>
          </div>
          <div className="data-card">
            <h2>Total Recovered</h2>
            <p>{data.recovered.toLocaleString()}</p>
            <hr></hr>
          </div>

          <div className="data-card">
            <h2>Active Cases</h2>
            <p>{data.active.toLocaleString()}</p>
            <hr></hr>
          </div>

          <div className="data-card">
            <h2>Affected Countries</h2>
            <p>{data.affectedCountries.toLocaleString()}</p>
            <hr></hr>
          </div>

          <div className="svg-frame"></div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Covid;
