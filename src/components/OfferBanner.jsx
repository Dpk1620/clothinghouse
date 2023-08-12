import React from "react";
import Stack from "@mui/material/Stack";
import image1 from "../assets/Group83.jpg";
import image2 from "../assets/Group85.jpg";

// offer banner page so if you want to you more offers to shwo with diffrent offer ration then you can use this component and pass data with same formate
const OfferBanner = () => {
  return (
    <>
      <div className="m-2">
        <div className="d-flex justify-content-center">
          <Stack
            spacing={{ xs: 1, sm: 2, md: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
             <div className="p-2">
              <img
                src={image1}
                style={{ maxWidth: "28rem",width:"50vh", maxHeight: "30rem" ,margin:"4px"}}
                alt=""
              />{" "}
            </div>
            <div className="p-2">
              <img
                src={image2}
                alt=""
                style={{ maxWidth: "28rem",width:"50vh", maxHeight: "30rem" }}
              />
            </div>
          </Stack>
        </div>
        </div>
    </>
  );
};

export default OfferBanner;
