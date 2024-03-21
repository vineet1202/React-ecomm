import ProductItem from "./ProductItem.js";
import "./ProudProducts.css";

function ProudProducts() {
  return (
    <div className="proud-container">
      <h2 className="container proud-title">Products we are proud of</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default ProudProducts;
