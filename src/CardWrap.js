import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardWrap = (props) => {
  return (
    <div style={{ margin: "70px 10px" }}>
      <Card country={props.country} img={props.flag}>
        <h2>
          {props.country.length > 30
            ? props.country.slice(0, 20) + "..."
            : props.country}
        </h2>
        <h5 className="card-title">{props.capital}</h5>
        <p className="card-text">
          <ul>
            {props.languages.slice(0, 3).map((language) => (
              <li>{language}</li>
            ))}
          </ul>
        </p>
      </Card>
    </div>
  );
};

CardWrap.propTypes = {
  country: PropTypes.string,
  capital:PropTypes.string,
  flag: PropTypes.string,
  languages:PropTypes.array,
};

CardWrap.defaultProps = {
  country: "",
  capital:"",
  flag: "",
  languages:[]
};

export default CardWrap;
