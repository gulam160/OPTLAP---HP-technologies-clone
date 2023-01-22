import React from "react";

const Card1 = ({ Id, Name, Sign, Price, Image, Discount }) => {
  const showAlert = () => {
    alert("Product Added to Cart");
  };
  return (
    <div className="products-box">
      <img src={Image} alt={Name} />
      <p style={{ margin: "8px 0", fontWeight: "500" }}>Details : {Name}</p>
      <p style={{ margin: "8px 0" }}>
        Price : {Sign}
        {Price}
      </p>
      <p style={{ margin: "8px 0" }}>Discount : {Discount}</p>
      <button onClick={showAlert}>Add To Cart</button>
    </div>
  );
};

export default Card1;
