import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

// Footer page added for website to showing exact path where a user wants to go.
// i have used simple bootstrap as much as i can with basic bootstrap css classes.
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light border ">
        <section className="p-2">
          <div
            className="container text-center text-md-start mt-5 text-decoration: underline"
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
          >
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 mx-auto mb-4 text-md">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.took a galley of type and scrambled it to make a
                  type
                </p>
                <div className="d-flex">
                  <Link
                  to={"https://www.facebook.com/"}
                    className="me-4 text-white text-center p-2"
                    style={{
                      background: "#3b5998",
                      borderRadius: "50%",
                      border: "1px solid",
                      height: "6",
                      width: "40px",
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                  to={"https://twitter.com/i/flow/login"}
                    className="me-4 text-white text-center p-2"
                    style={{
                      background: "#55acee",
                      borderRadius: "50%",
                      height: "6",
                      width: "40px",
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="me-4 text-white text-center p-2"
                    style={{
                      background: "#dd4b39",
                      borderRadius: "50%",
                      height: "6",
                      width: "40px",
                    }}
                  >
                    <i className="fab fa-google"></i>
                  </Link>
                  <Link
                  to={"https://www.instagram.com/"}
                    className="me-4 text-white text-center p-2"
                    style={{
                      background: "#ac2bac",
                      borderRadius: "50%",
                      height: "6",
                      width: "40px",
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                      to={"https://www.linkedin.com/"}
                    className="me-4 text-white text-center p-2"
                    style={{
                      background: "#0082ca",
                      borderRadius: "50%",
                      height: "6",
                      width: "40px",
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "darkred" }}
                >
                  Online Shopping
                </h6>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none", fontWeight: 500 }}
                  to={"men-t-shirt"}
                >
                  {" "}
                  <p>Men's T-shirt </p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"women's-wear"}
                >
                  {" "}
                  <p>Women's wear </p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"winter-collection"}
                >
                  {" "}
                  <p>Winter Collection </p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"hooded-t-shirt"}
                >
                  {" "}
                  <p>Hooded T-shirt </p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"streetwear-collections"}
                >
                  {" "}
                  <p>Streetwear Collections </p>
                </Link>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "darkred" }}
                >
                  Customer policies
                </h6>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"customer-policies"}
                >
                  {" "}
                  <p>About us</p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"aboutus"}
                >
                  {" "}
                  <p>Terms & Conditions</p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"termsandconditions"}
                >
                  {" "}
                  <p>Shipping & Return Policy</p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"refund"}
                >
                  {" "}
                  <p>Cancellation & Refund Policy </p>
                </Link>
                <Link
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                  to={"contactus"}
                >
                  {" "}
                  <p>Contact us</p>
                </Link>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "darkred" }}
                >
                  store Information
                </h6>
                <div>
                  <p>
                    <CiLocationOn className="me-2" />
                    Lorem Ipsum is simply dummy text of the printing and{" "}
                    typesetting industry.
                  </p>
                </div>
                <p>
                  <IoCallOutline className="me-2" />
                  callus: + 01 234 567 89
                </p>
                <p>
                  <AiOutlineMail className="me-2" /> Email :info@example.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-white p-3 bg-black">
          © 2021 Copyright: Powered By dummy team
        </div>
      </footer>
    </div>
  );
};

export default Footer;
