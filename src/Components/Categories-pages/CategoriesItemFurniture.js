import "../ProudProducts.css";
import { items } from "../AllData.js";
import { Link } from "react-router-dom";

export default function CategoriesItemFurniture() {
  const filteredItems = items.filter((item) => item.category === "furniture");
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
