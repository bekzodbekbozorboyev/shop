import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function SinglePage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  let API = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(API + "/" + id)
      .then((javob) => javob.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [API, id]);
  return (
    <div className="single-page">
      {loading ? (
        <Loader />
      ) : (
        <div className="single-wrapper">
          <div className="left">
            <figure>
              <img src={product?.image} alt={product?.title} />
            </figure>
          </div>
          <div className="right">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <div className="buy">
              <p>{product?.price}$</p>
              <button>
                <Link >BUY</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SinglePage;
