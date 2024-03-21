import "../ProudProducts.css";
import { items } from "../AllData.js";
import { Link } from "react-router-dom";

function CategoriesItemChairs() {
  const filteredItems = items.filter((item) => item.category === "chair");
  return (
    <div className="container">
      <div className="products-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="product">
            <Link to={`/categories/product/${item.id}`}>
              <div className="product-header">
                <img src={item.img} />
              </div>
              <div className="product-details">
                <p>{item.description}</p>
                <p className="item-price">${item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesItemChairs;
