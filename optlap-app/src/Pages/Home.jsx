import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card1Home from "./card1home";
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
              colorScheme="#3182ce"
              size="md"
              sx={{ width: "100px", background: "#3182ce" }}
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
      {/* New div */}
      <div className="welcome-box">
        <h1
          style={{
            fontSize: "20px",
            margin: "10px 20px",
            textAlign: "left",
            fontWeight: "500",
          }}
        >
          Welcome Back
        </h1>
        <div className="cards">
          <Card1Home
            heading="Best Seller"
            type="Get our best laptops for less."
            button="Shop Now"
          />
          <Card1Home
            heading="Laptop Buying Guide"
            type="Learn more about the types of Laptops & select the best model for your use."
            button="Learn More"
          />
          <Card1Home
            heading="Access My Account"
            type="Sign in to your account to track & view your orders.."
            button="Sign In"
          />
        </div>
      </div>
      {/* 3rd div */}
      <div className="inspiron-laptops">
        <div className="lft-inspiron">
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-homepage-module-rf-1023x842-lr.png?fmt=png-alpha&wid=1023&hei=842"
            alt="inspiron"
            width="100%"
          />
        </div>
        <div className="rght-ispiron">
          <h4 style={{ fontWeight: "500" }}>INSPIRON LAPTOPS</h4>
          <p style={{ fontSize: "26px", fontWeight: "400", margin: "10px 0" }}>
            Power Your Success Story
          </p>
          <p style={{ fontSize: "20px" }}>
            Give yourself a tech edge with 10% cashback on <br /> Citi cards or
            instant discounts on UPI & headsets.
          </p>
          <p style={{ margin: "10px" }}>*T&C apply.</p>
          <div>
            <span
              style={{ color: "#3182ce", fontSize: "20px", cursor: "pointer" }}
            >
              Shop Now
            </span>{" "}
            |{" "}
            <span
              style={{ color: "#3182ce", fontSize: "20px", cursor: "pointer" }}
            >
              Learn More
            </span>
          </div>
        </div>
      </div>
      {/* 4th div */}
      <div className="offer2box">
        <div className="lft-inspiron-lft">
          <h4 style={{ fontWeight: "500" }}>REPUBLIC DAY OFFERS</h4>
          <h1 style={{ fontSize: "26px", fontWeight: "400", margin: "10px 0" }}>
            Set Your Creativity Free
          </h1>
          <p style={{ fontSize: "20px" }}>
            Celebrate Republic Day with 10% cashback on Citi cards or <br />{" "}
            instant discounts on UPI & headsets. *T&C apply
          </p>
          <p style={{ color: "#3182ce", fontSize: "20px", cursor: "pointer" }}>
            For Home
          </p>
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/2-ups/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-in-homepage-2up-module-800x400.png?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0"
            alt="lapy"
          />
        </div>
        <div className="rght-ispiron">
          <h4 style={{ fontWeight: "500" }}>
            COMPUTER ELECTRONICS AND ACCESSORIES
          </h4>
          <h1 style={{ fontSize: "26px", fontWeight: "400", margin: "10px 0" }}>
            Overprepared For Everything
          </h1>
          <p style={{ fontSize: "20px" }}>
            Whether you're looking for a keyboard, mouse, docking <br /> station
            or something else, we've got you covered.
          </p>
          <p style={{ color: "#3182ce", fontSize: "20px", cursor: "pointer" }}>
            Learn More
          </p>
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/banners/q4w1-con-warm-2updeal2-wl5022-km7321w-mh3021p-800x400.jpg?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0"
            alt="lapy"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
