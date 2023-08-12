import { Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { MdCall } from "react-icons/md";

// this component is also in material-ui formate to understand the coding formate and use of multiple ui libraries at a time.
const TopHeader = () => {
  return (
    <div>
      <Navbar
        className="bg-black pb-0.3rem"
        style={{
          height: "1.6rem",
          fontSize: "14px",
          fontFamily: "Montserrat",
        }}
      >
        <Container className="">
          <Navbar.Text className="text-white caption-text justify">
            <Typography variant="Montserrat"> Welcome to Out Store Hiscurves</Typography>
          </Navbar.Text>
          <Navbar.Text className="text-white mt-3 caption-text justify">
            <p>
              {" "}
              <MdCall className="me-md-1 " style={{fontSize:"18px"}} /> Call Us: 8299190219
            </p>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopHeader;
