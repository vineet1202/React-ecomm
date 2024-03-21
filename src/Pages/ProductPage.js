import TrendingSlider from "../Components/TrendingSlider";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import "../Components/ProductPage.css";
import { items } from "../Components/AllData.js";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../Context";

export default function ProductPage() {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const thisProduct = items.find((product) => product.id === parseInt(id));
  return (
    <>
      <div className="body">
        <div className="detail">
          <div className="left-col">
            <img src={thisProduct.img}></img>
          </div>
          <div class="right-col">
            <h1>{thisProduct.description}</h1>
            <p>{thisProduct.specs}</p>
            <p style={{ fontWeight: "600", fontSize: "1.2em" }}>
              Price: {thisProduct.price}$
            </p>
            <button
              className="btn-1"
              onClick={() => {
                console.log("Button clicked!");
                addToCart(thisProduct);
              }}
            >
              Add to Cart
            </button>
            <button className="btn-2">Buy Now</button>
          </div>
        </div>
      </div>
      <TrendingSlider />
      <Newsletter />
      <Footer />
    </>
  );
}
