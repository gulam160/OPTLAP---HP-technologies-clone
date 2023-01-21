import React from "react";

const Card1Home = ({ heading, type, button }) => {
  return (
    <div className="card1home">
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "500",
          borderBottom: "2px solid #0001",
          padding: "10px 0",
        }}
      >
        {heading}
      </h1>
      <p style={{ fontSize: "20px", paddingBottom: "20px" }}>{type}</p>
      <p
        style={{
          color: "blue",
          font: "18px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        {button}
      </p>
    </div>
  );
};

export default Card1Home;
