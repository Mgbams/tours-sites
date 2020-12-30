import React from "react";
import PropTypes from "prop-types";

const Tour = ({ id, name, image, info, price }) => {
  const texts =
    "Hello word and i am happy writing this ugly text that wont allow me succeed and it is difficult as hell to come up with the logic to continue doing it. Hello word and i am happy writing this ugly text that wont allow me succeed and it is difficult as hell to come up with the logic to continue doing it. Hello word and i am happy writing this ugly text that wont allow me succeed and it is difficult as hell to come up with the logic to continue doing it.Hello word and i am happy writing this ugly text that wont allow me succeed and it is difficult as hell to come up with the logic to continue doing it.";

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
            {info ? info.substring(0, 200) : "default description"}...
            <button
              className="readmore-button"
              onClick={() => console.log("hello")}
            >
              Read More
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
