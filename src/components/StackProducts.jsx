import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { CardContent, Container } from "@mui/material";

//  I have used material ui here so we can use multiple bootstrap/ Mdbreact and material ui together.
const StackProducts = ({ image, name, loading }) => {
  return (
    <>
      {image ? (
        <>
          <Container>
            <div style={{ marginTop: "20px" }}>
              <Avatar
                alt="Remy Sharp"
                sx={{
                  width: 150,
                  maxWidth: 150,
                  minWidth: 150,
                  maxHeight: 140,
                  height: 150,
                  border: "2px",
                }}
                src={image}
              />
            </div>
            <p 
              style={{
                justifyItems: "center",
                marginLeft: "36px",
                fontWeight: "bold",
                fontFamily: "Playfair Display",
                fontSize: "16px",
              }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </p>
          </Container>
        </>
      ) : (
        <div
          className="d-flex"
          style={{ width: 120, height: 120 }}
        >
          <Card>
            <CardContent>{loading}</CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default StackProducts;
