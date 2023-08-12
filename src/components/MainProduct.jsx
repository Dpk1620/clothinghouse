import { useState } from "react";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

// I have add condition rendering here so if product will take time to load then it will not showing error or
//  take time instead of loading card so user will understand that this website is take tym to response from this behaviour
const MainProduct = ({ image, name, price, loading }) => {
  const [data, setData] = useState({
    height: "22rem",
    width: "13rem",
  });

  const changeSizeofProfuct = (e) => {
    let value;
    if (e === "S") {
      value = {
        height: "18rem",
        width: "9rem",
      };
      setData(value);
    } else if (e === "M") {
      value = {
        height: "19rem",
        width: "10rem",
      };
      setData(value);
    } else if (e === "L") {
      value = {
        height: "20rem",
        width: "11rem",
      };
      setData(value);
    } else if (e === "XL") {
      value = {
        height: "21rem",
        width: "12rem",
      };
      setData(value);
    } else {
      value = {
        height: "22rem",
        width: "13rem",
      };
      setData(value);
    }
  };
  return (
    <>
      {image ? (
        <>
          <div className="m-2">
            <div style={{ height: "25rem", width: "11rem" }}>
              <div className="d-flex justify-content-center">
                <img
                  src={image}
                  className="border"
                  style={{ width: data.width, height: data.height }}
                  alt=""
                />
              </div>
              <p className="d-flex justify-content-center mb-0">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
              <span className="d-flex justify-content-center fw-bold">
                ₹{parseInt(price)}
                <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                    textDecoration: "line-through",
                    marginTop: "5px",
                  }}
                >
                  {" "}
                  1299
                </p>
              </span>
            </div>
            <div
              className="d-flex md:justify-content-center"
              style={{ fontFamily: "Playfair Display", position: "relative" }}
            >
              <btn
                className="m-1 px-2 border"
                onClick={(e) => {
                  changeSizeofProfuct("S");
                }}
              >
                S
              </btn>{" "}
              <btn
                className="m-1 px-2 border"
                onClick={(e) => {
                  changeSizeofProfuct("M");
                }}
              >
                M
              </btn>
              <btn
                className="m-1 px-2 border"
                onClick={(e) => {
                  changeSizeofProfuct("L");
                }}
              >
                L
              </btn>
              <btn
                className="m-1 px-2 border"
                onClick={(e) => {
                  changeSizeofProfuct("XL");
                }}
              >
                XL
              </btn>
              <btn
                className="m-1 px-2 border"
                onClick={(e) => {
                  changeSizeofProfuct("XXL");
                }}
              >
                XXL
              </btn>
            </div>
          </div>
        </>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ width: "11rem", height: "20rem" }}
        >
          <Card>
            <CardContent>{loading}</CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default MainProduct;
