import img2 from "../img/banner/banner2.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

function BannerReverse({ title, text }) {
  return (
    <div className="container">
      <div className="banner-box">
        <img src={img2} className="banner-img reverse"></img>
        <div className="content ">
          <p className="title ">Comfortable & Elegante Living</p>
          <p className="text">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <Link to="/categories/all">
            <button className="banner-btn">Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerReverse;
