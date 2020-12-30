import React, { useState } from "react";
import PropTypes from "prop-types";

const Tour = ({ id, name, image, info, price }) => {
  const [readMore, setReadMore] = useState(true);

  const handleReadMore = () => {
    console.log("hello");
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };

  return (
    <div className="tour-section mb-5">
      <div className="card" style={{ width: "36rem" }}>
        <img
          className="card-img-top"
          src={image ? image : ""}
          alt="Card image cap"
        />
        <div className="card-body px-20">
          <div className="d-flex justify-content-between">
            <h3>{name ? name : "default name"}</h3>
            <p>&euro; {price ? price : 1300}</p>
          </div>
          <p className="card-text description my-3">
            {readMore ? info.substring(0, 200) + "..." : info}
            <button className="readmore-button" onClick={handleReadMore}>
              {readMore ? "Read More" : "Show Less"}
            </button>
          </p>
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-outline-danger"
              style={{ width: "15rem" }}
            >
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Tour.propTypes = {};

export default Tour;
