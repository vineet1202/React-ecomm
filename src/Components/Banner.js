import img1 from "../img/banner/banner1.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner({ title, text }) {
  return (
    <div className="container">
      <div className="banner-box">
        <div className="content">
          <p className="title">Creative harmonious living</p>
          <p className="text">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <Link to="/categories/all">
            <button className="banner-btn">Shop now</button>
          </Link>
        </div>
        <img src={img1} className="banner-img"></img>
      </div>
    </div>
  );
}

export default Banner;
