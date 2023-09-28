import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://your-django-api-endpoint/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <div>{/* Render product cards here */}</div>;
}

export default ProductCards;
