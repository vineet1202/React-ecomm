import "./TrendingSlider.css";
import { items } from "./AllData.js";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 8);
  //scroll to top when a new product is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link
            to={`/categories/product/${item.id}`}
            onClick={handleScrollToTop}
          >
            <div className="item-header">
              <img src={item.img}></img>
            </div>
            <div className="item-details">
              <p>{item.description}</p>
              <p className="item-price">${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
