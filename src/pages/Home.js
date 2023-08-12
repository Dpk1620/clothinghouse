import React, { useEffect, useState } from "react";
//child component Diver
import Diver from "../components/DividerHr";
import Stack from "@mui/material/Stack";
//child component Stack Products
import StackProducts from "../components/StackProducts";
//child component Main Products
import CardProduct from "../components/MainProduct";
//child component Banner Images
import MainImage from "../components/MainImage";
import newIage from "../assets/banner.jpg";
import OfferBanner from "../components/OfferBanner";
import Look from "../assets/theLook.jpg";
import Faishon from "../assets/faishion.jpg";
import CircleEllipe from "../components/CircleEllipe";
import { Container } from "@mui/material";
import CircleIcons from "../components/CircleIcons";
import ImageCollage from "../components/ImageCollage";
import ShadingProducts from "../components/ShadingProducts";

const Home = () => {
  const [slideProducts, setSlideProducts] = useState([]);
  const loadingArrayFeature = new Array(6).fill(null);

  //fake api for 20 products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setSlideProducts(json));
  }, []);

  // conversion of products as per requirements,
  // So no need to call multiple api for showing every part of product
  const products = slideProducts.slice(0, 6);
  // const ShadingProd = slideProducts.slice(13, 18);
  const CardNewPrd = slideProducts.slice(7, 11);
  const CardNewPrd1 = slideProducts.slice(14, 18);
  const FeatureProducts = slideProducts.slice(0, 4);
  return (
    <div>
      {/* step 1  */}
      <MainImage image={Look} />

      {/* step 2  */}
      {/* Rounded Show Products */}
      <div
        className="d-flex justify-content-center m-3"
        style={{ overflow: "auto" }}
      >
        <Stack direction="row" spacing={1}>
          {products[0]
            ? products.map((el) => {
                return (
                  <StackProducts
                    className="border"
                    key={el.id}
                    image={el.image}
                    name={el.category}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <StackProducts
                  loading={"Loading..."}
                  key={index + "allProduct"}
                />
              ))}
        </Stack>
      </div>

      {/* step 3 Image Added */}
      <Container>
        <ImageCollage />
      </Container>

      {/* step 4 */}
      {/* Diverder and new Card products added */}
      <div className="d-flex justify-content-center">
        <Diver name={"Trending T-shirts"} />
      </div>
      <Container>
        <div
          className="d-flex justify-content-center mt-4"
          style={{ overflow: "auto" }}
        >
          {CardNewPrd[0]
            ? CardNewPrd.map((el, index) => {
                return (
                  <CardProduct
                    key={index}
                    image={el.image}
                    name={el.category}
                    price={el.price}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardProduct loading={"Loading..."} key={index} />
              ))}
        </div>
      </Container>
      <Container>
        <div
          className="mt-8 d-flex justify-content-center "
          style={{ marginTop: "40px", marginBottom: "40px", overflow: "auto" }}
        >
          {CardNewPrd1[0]
            ? CardNewPrd1.map((el, index) => {
                return (
                  <CardProduct
                    key={index}
                    image={el.image}
                    name={el.category}
                    price={el.price}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardProduct loading={"Loading..."} key={index} />
              ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="p-1 px-4 border my-4 text-white text-uppercase"
            style={{ backgroundColor: "darkred" }}
          >
            View All
          </button>
        </div>
      </Container>

      {/* step 5*/}
      <Container>
        <div className="d-flex justify-content-center">
          <Diver name={"Featured Products"} />
        </div>
        <div
          className="d-flex justify-content-center mt-4"
          style={{ overflow: "auto" }}
        >
          {FeatureProducts[0]
            ? FeatureProducts.map((el, index) => {
                return (
                  <CardProduct
                    key={index}
                    image={el.image}
                    name={el.category}
                    price={el.price}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardProduct loading={"Loading..."} key={index} />
              ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="p-1 px-4 border my-4 text-white text-uppercase"
            style={{ backgroundColor: "darkred" }}
          >
            View All
          </button>
        </div>
      </Container>

      {/* step 6 Image Added */}
      <div className="mt-4">
        <MainImage image={Faishon} />
      </div>

      {/* step 7 */}
      <Container>
        <div className="d-flex justify-content-center">
          <Diver name={"New Products"} />
        </div>
        <div
          className="d-flex justify-content-center mt-4"
          style={{ overflow: "auto" }}
        >
          {CardNewPrd1[0]
            ? CardNewPrd1.map((el, index) => {
                return (
                  <CardProduct
                    key={index}
                    image={el.image}
                    name={el.category}
                    price={el.price}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardProduct loading={"Loading..."} key={index} />
              ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="p-1 px-4 border my-4 text-white text-uppercase"
            style={{ backgroundColor: "darkred" }}
          >
            View All
          </button>
        </div>
      </Container>
      {/*  step 8  */}
      <Container>
        <div className="d-flex justify-content-center">
          <Diver name={"Best Selling Products"} />
        </div>
        <div
          className="d-flex justify-content-center mt-4"
          style={{ overflow: "auto" }}
        >
          {FeatureProducts[0]
            ? FeatureProducts.map((el, index) => {
                return (
                  <CardProduct
                    key={index}
                    image={el.image}
                    name={el.category}
                    price={el.price}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardProduct loading={"Loading..."} key={index} />
              ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="p-1 px-4 border my-4 text-white text-uppercase"
            style={{ backgroundColor: "darkred" }}
          >
            View All
          </button>
        </div>
      </Container>
      {/* step 9 */}

      <div className="d-flex jsutify-content-center">
        <Container>
          <ShadingProducts />
        </Container>
      </div>

      {/* step 10 */}
      <div className="mt-2">
        <MainImage image={newIage} />
      </div>

      {/* step 11 */}
      <OfferBanner />

      {/* step 12 */}
      <div
        className="bg-blue border"
        style={{ height: "auto", minHeight: "285px", marginTop: "80px" }}
      >
        <div>
          <p className="SetCirleElipsisright justify-content-end"></p>
        </div>
        {/* step 13 */}
        <CircleIcons />
        <div>
          <p className="SetCirleElipsisleft justify-content-left"></p>
        </div>
      </div>
      {/* step 14 */}
      <Container className="overflow-hidden mt-4 mb-4">
        <CircleEllipe />
      </Container>
    </div>
  );
};
export default Home;
