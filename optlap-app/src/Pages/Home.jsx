import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageStyles/Home.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="home">
      <div className="first-home-box">
        <div className="box-content" onClick={handleNavigate}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4439/4439476.png"
            alt="laptop"
            width={40}
          />
          <p>Laptops</p>
        </div>
        <div className="box-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8650/8650785.png"
            alt="desktops"
            width={40}
          />
          <p>Desktops</p>
        </div>
        <div className="box-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/71/71298.png"
            alt="alienware"
            width={40}
          />
          <p>Alienware</p>
        </div>
        <div className="box-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2933/2933190.png"
            alt="monitors"
            width={40}
          />
          <p>Monitors</p>
        </div>
        <div className="box-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/482/482469.png"
            alt="vostro"
            width={40}
          />
          <p>Vostro</p>
        </div>
        <div className="box-content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2503/2503502.png"
            alt="accessories"
            width={40}
          />
          <p>Accessories</p>
        </div>
      </div>
      <div
        className="offer-box"
        style={{
          display: "flex",
          width: "100%",
          background: "white",
          paddingTop: "40px",
          border: "2px solid #0001",
        }}
      >
        <div
          className="left-container"
          style={{
            width: "50%",
            padding: "5px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "22px",
              fontWeight: "400",
              textTransform: "uppercase",
              textAlign: "left",
            }}
          >
            Republic Day Offers
          </h1>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "400",
              textTransform: "uppercase",
              textAlign: "left",
            }}
          >
            Be free to Be more
          </h1>
          <p style={{ textAlign: "left" }}>
            Get 10% cashback up to ₹5,000 on Citi cards & 2 years onsite
            warranty at ₹1*. <span>icon</span>
          </p>
          <ButtonGroup display="flex" my="5">
            <Button
              colorScheme="blue"
              size="md"
              sx={{ width: "100px" }}
              onClick={handleNavigate}
            >
              Shop Deals
            </Button>
            <Button
              colorScheme="white"
              size="md"
              sx={{
                width: "150px",
                border: "1px solid #3182ce",
                color: "#3182ce",
              }}
            >
              Monitor Details
            </Button>
          </ButtonGroup>
        </div>
        <div
          className="right-container"
          style={{ width: "50%", maxHeight: "400px" }}
        >
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/republic-day-cons-dell-xps-9315t-9315nt-uhp-2304-12-in-homepage-hero-1023x842.png?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=342&qlt=100&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,842"
            alt="test1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
