import { Link } from "react-router-dom";
import "./CategoriesHeader.css";
import { useState } from "react";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <div className="container">
      <div className="category-container">
        <h1>{btnName}</h1>
        <div className="category-box">
          <Link to="all" onClick={() => handleBtnName("All")}>
            <button className={btnName === "All" ? `highlight-btn` : "btn"}>
              All
            </button>
          </Link>
          <Link to="furnitures" onClick={() => handleBtnName("Furnitures")}>
            <button
              className={btnName === "Furnitures" ? `highlight-btn` : "btn"}
            >
              Furnitures
            </button>
          </Link>
          <Link to="electronics" onClick={() => handleBtnName("Electronics")}>
            <button
              className={btnName === "Electronics" ? `highlight-btn` : "btn"}
            >
              Electronics
            </button>
          </Link>
          <Link to="lamps" onClick={() => handleBtnName("Lamps")}>
            <button className={btnName === "Lamps" ? `highlight-btn` : "btn"}>
              Lamps
            </button>
          </Link>
          <Link to="kitchen" onClick={() => handleBtnName("Kitchen")}>
            <button className={btnName === "Kitchen" ? `highlight-btn` : "btn"}>
              Kitchen
            </button>
          </Link>
          <Link to="chairs" onClick={() => handleBtnName("Chairs")}>
            <button className={btnName === "Chairs" ? `highlight-btn` : "btn"}>
              Chairs
            </button>
          </Link>
          <Link to="skin-care" onClick={() => handleBtnName("Skin-care")}>
            <button
              className={btnName === "Skin-care" ? `highlight-btn` : "btn"}
            >
              Skin Care
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;
