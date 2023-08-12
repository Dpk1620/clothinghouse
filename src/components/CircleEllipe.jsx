import React from "react";
import Container from "@mui/material/Container";

// This component is shows input box with red container before the footer
const CircleEllipe = () => {
  return (
    <Container maxWidth="lg mt-1">
      <div style={{ backgroundColor: "darkred", height: "290px" }}>
        <div className="d-flex justify-content-center text-white overflow:hidden p-4">
          <h2
            style={{
              marginTop: "1%",
              fontFamily: "Playfair Display",
              fontWeight: "200",
              fontSize: "32px",
            }}
          >
            Subcribe to get updates on existing offers
            <h2 className="d-flex justify-content-center">
              <p className="GFG" style={{ marginRight: "4px" }}>
                &<> </>{" "}
              </p>
              items
            </h2>
            <div className="input-group input-group-lg mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email your name"
                style={{ borderRadius: 0, opacity: 0.4, fontSize: "15px" }}
              />
              <button
                className=""
                style={{
                  fontSize: "18px",
                  background: "white",
                  color: "darkred",
                  borderRadius: 0,
                  fontFamily: "Playfair Display",
                  fontWeight: "600",
                }}
                type="button"
              >
                Subscribe
              </button>
            </div>
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default CircleEllipe;
