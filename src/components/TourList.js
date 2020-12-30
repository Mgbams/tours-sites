import React from "react";
import Tour from "./Tour";
import { useFetch } from "../hooks/useFetch";
const url = "https://course-api.com/react-tours-project";

const TourList = () => {
  const { data, isLoading, removeHandler } = useFetch(url);

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
