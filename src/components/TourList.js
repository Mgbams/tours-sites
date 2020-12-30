import React, { useState, useEffect } from "react";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";

const TourList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const tourSites = await response.json();
    setData(tourSites);
    setIsLoading(false);
  };

  const removeHandler = (id) => {
    const interested = data.filter((response) => response.id !== id);
    setData(interested);
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return (
    <div style={{ marginTop: "50px" }}>
      {isLoading && (
        <div className="text-center" style={{ fontSize: "2.5rem" }}>
          Loading ...
        </div>
      )}
      {!isLoading && (
        <h1 className="text-center mb-3 main-title">
          <strong>Our Tours</strong>
          <div className="hr"></div>
        </h1>
      )}
      {data.map((tour) => (
        <Tour key={tour.id} {...tour} removeHandler={removeHandler} />
      ))}
    </div>
  );
};

export default TourList;
