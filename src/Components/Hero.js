import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";

function Hero() {
  return (
    <div class="home-container">
      <div className="container">
        <div className="grid-container">
          <div class="featured item-1">
            <Link to="/categories/furnitures">
              <div id="img1" className="overlay"></div>
              <img src={Main1}></img>
              <p class="caption">Live Comfortably</p>
            </Link>
          </div>
          <div class="featured item-2">
            <Link to="/categories/skin-care">
              <div id="img2" className="overlay"></div>
              <img src={Main2}></img>
              <p class="caption">Skincare</p>
            </Link>
          </div>
          <div class="featured item-3">
            <Link to="/categories/kitchen">
              <div id="img3" className="overlay"></div>
              <img src={Main3}></img>
              <p class="caption">Kitchen</p>
            </Link>
          </div>
          <div class="featured item-4">
            <Link to="/categories/electronics">
              <div id="img4" className="overlay"></div>
              <img src={Main4}></img>
              <p class="caption">Electronics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
