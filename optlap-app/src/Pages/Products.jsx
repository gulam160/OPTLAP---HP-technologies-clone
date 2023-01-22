import { useState, useEffect } from "react";
import Card1 from "../Pages/Card1";

const getData = () => {
  return fetch(`https://rus-digital-televisions.onrender.com/computers`).then(
    (res) => res.json()
  );
};

const Products = () => {
  const [data, setData] = useState([]);

  const obdata = async () => {
    try {
      const obtaineddata = await getData();
      setData(obtaineddata);
    } catch (error) {
      console.log(error, "404/data Not Found");
    }
  };

  useEffect(() => {
    obdata();
  }, []);

  console.log(data);

  return (
    <div id="make-up">
      {data.map(({ id, name, mrp, img, discount }) => {
        return (
          <Card1
            key={id}
            Id={id}
            Name={name}
            Sign="₹"
            Price={mrp}
            Image={img}
            Discount={discount}
          />
        );
      })}
    </div>
  );
};
export default Products;
