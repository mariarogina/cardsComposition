import CardWrap from "./CardWrap";
import React from "react";
import PropTypes from "prop-types";

export default function CardsLayout(props) {
  var CardList = props.countries.map(function (country) {
    return (
      <div>
        <li
          style={{
            margin: "20px",
            width: "300px",
            height: "300px",
            listStyle: "none",
          }}
        >
          <CardWrap
            country={country.country}
            capital={country.capital}
            flag={country.flag}
            languages={country.languages}
          />
        </li>
      </div>
    );
  });
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {CardList}
    </div>
  );
}

CardsLayout.propTypes = {
    countries:PropTypes.array,
  };
  
  CardsLayout.defaultProps = {
    countries:[]
  };
  