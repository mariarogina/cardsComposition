import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card" style={{ minWidth: "300px" }}>
      {props.img && (
        <img
          style={{ width: "150px" }}
          src={props.img}
          className="card-img-top"
          alt={props.country}
        />
      )}
      <div className="card-body">
        {props.children}

        <a href="#" className="btn btn-primary">
          Go to{" "}
          {props.country.length > 30
            ? props.country.slice(0, 20) + "..."
            : props.country}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  country: PropTypes.string,
  flag: PropTypes.string,
};

Card.defaultProps = {
  country: "",
  flag: "",
};

export default Card;
