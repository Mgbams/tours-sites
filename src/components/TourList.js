import React, { useState, useEffect } from "react";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";

const TourList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const tourSites = await response.json();
    console.log(tourSites);
    setData(tourSites);
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 className="text-center mb-3">Our Tours</h1>
      {data.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default TourList;
