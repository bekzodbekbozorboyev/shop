import React, { useEffect, useState } from "react";
import "./Products.css";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

function Products() {
  let API = "https://fakestoreapi.com/products";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((javob) => javob.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [API]);
  return (
    <div className="products">
      {loading ? (
        <Loader />
      ) : (
        data?.map((product, index) => (
          <div key={index} className="product-item">
            <Link to={`single-page/${product.id}`}>
              <figure>
                <img src={product.image} alt={product.title} />
              </figure>
            </Link>
            <div className="title">
              <h3>{product.title}</h3>
            </div>
            <div className="prices">
              <s>{product.price}$</s>
              <p>{Math.round(product.price - (product.price * 10) / 100)}$</p>
            </div>
            <div className="rating">
              <div>
                <FaEye className="views-icon" />
                <p>{product.rating.count}</p>
              </div>
              <div>
                <FaStar className="rating-icon" />
                <p>{product.rating.rate}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
