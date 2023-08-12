import React from "react";
import Box from "@mui/material/Box";
import Icon1 from "../assets/boxes.jpg";
import Icon2 from "../assets/batch.jpg";
import Icon3 from "../assets/debitCard.jpg";
import Icon4 from "../assets/caller.jpg";
import { Container, Divider } from "@mui/material";
import { Link } from "react-router-dom";

// Icon Component for Showing paymentIcon, Return, Refund
const CircleIcons = () => {
  return (
    <Container style={{ marginLeft: "22%" }}>
      <Box
        className="d-flex md:justify-content-center overflow-scroll"
        sx={{
          "& > :not(style)": {
            m: 3,
            mt: 5,
            fontWeight: "600",
            fontFamily: "Montserrat",
            fontSize: "18px",
          },
        }}
      >
        <div className="text-center">
        <Link to={"return"}>
          <div>
            <img src={Icon1} alt="" />
          </div>
          </Link>
          <p className="mt-4">7 Days Return</p>
        </div>
        <Divider
          orientation="vertical"
          style={{
            border: "1px solid pink",
            maxHeight: "110px",
            marginTop: "50px",
          }}
          variant="middle"
          flexItem
        />
        <div className="text-center">
        <Link to={"qualityproducts"}>
          <div>
            <img src={Icon2} alt="" />
          </div>
          </Link>
          <p className="mt-4 ">Quality Products</p>
        </div>
        <Divider
          orientation="vertical"
          style={{
            border: "1px solid pink",
            maxHeight: "110px",
            marginTop: "50px",
          }}
          variant="middle"
          flexItem
        />
        <div className="text-center">
        <Link to={"payment"}>
          <div>
            <img src={Icon3} alt="" />
          </div>
          </Link>
          <p className="mt-4">Safe Payment</p>
        </div>
        <Divider
          orientation="vertical"
          style={{
            border: "1px solid pink",
            maxHeight: "110px",
            marginTop: "50px",
          }}
          variant="middle"
          flexItem
        />
        <div className="text-center">
          <Link to={"helpline"}>
            <div className="m-1">
              <img src={Icon4} alt="" />
            </div>
          </Link>
          <p className="m-4">24x7 Helpline </p>
        </div>
      </Box>
    </Container>
  );
};

export default CircleIcons;
