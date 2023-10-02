import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

import ProductCards from "./ProductCards";
import mockProducts from "./mockData";

export const Products = () => {
  const [details, setDetails] = useState([]); // Initialize 'details' as a state variable
  const [sortOrder, setSortOrder] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    // For testing, use mock data
    setDetails(mockProducts);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const sortProducts = (criteria) => {
    const sortedProducts = [...details];

    if (criteria === "price") {
      sortedProducts.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
    // else if (criteria === "review") {
    //   sortedProducts.sort((a, b) => {
    //     if (sortOrder === "asc") {
    //       return a.review - b.review;
    //     } else {
    //       return b.review - a.review;
    //     }
    //   });
    // }

    setDetails(sortedProducts);
  };

  return (
    <div className="products">
      {/* <div className="div"> */}
      <div className="text-input-container">
        <div className="home-menu">Home</div>
        <div className="findastore-menu">Customer Service</div>
      </div>
      <div className="hero">
        <div className="overlap">
          <img className="img" alt="Image" src="/img/image-1.png" />
          <img className="image-2" alt="Image" src="/img/Yatsuhashi.png" />
          <div className="overlapGroups">
            <div className="overlap-group-2">
              <div className="text-wrapper-4">With love.</div>
              <img className="image-5" alt="Image" src="/img/image-5.png" />
            </div>
            <div className="overlap-2">
              <p className="text-wrapper-3">
                Elevate Gifting with a Touch of Japan
              </p>
              <img className="image-3" alt="Image" src="/img/image-4.png" />
              <img className="image-4" alt="Image" src="/img/image-4.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-container">
        <div className="overlap-3">
          <div className="text-wrapper-8">OmiyageOdyssey Collection</div>
          <img className="image-6" alt="Image" src="/img/image-6.png" />
          <div className="text-input-4">
            <div className="all-sort-options">
              <input
                type="button"
                className="text-wrapper-5"
                onClick={toggleOptions}
                value="Sort"
              />
              <div className="options-dropdown">
                <input
                  type="button"
                  className={`sort-options price-up ${isOpen ? "visible" : ""}`}
                  value="price-up"
                  onClick={() => {
                    setSortCriteria("price");
                    setSortOrder("asc");
                    sortProducts("price");
                  }}
                />
                <input
                  type="button"
                  className={`sort-options price-down ${
                    isOpen ? "visible" : ""
                  }`}
                  value="price-down"
                  onClick={() => {
                    setSortCriteria("price");
                    setSortOrder("desc");
                    sortProducts("price");
                  }}
                />
                <input
                  type="button"
                  className={`sort-options review-up ${
                    isOpen ? "visible" : ""
                  }`}
                  value="review-up"
                />
                <input
                  type="button"
                  className={`sort-options review-down ${
                    isOpen ? "visible" : ""
                  }`}
                  value="review-down"
                />
              </div>
            </div>
          </div>

          <div className="productsList">
            {details.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
          {/* <div className="checkbox">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-7.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Flannel shirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 2,299.00</div>
            </div>
          </div> */}
          {/* <div className="overlap-wrapper">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-8.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Flannel shirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 2,299.00</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-9.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Flannel shirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 2,299.00</div>
            </div>
          </div>
          <div className="button">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-10.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Cargo Joggers</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 1,899.00</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-11.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Cargo Joggers</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 1,899.00</div>
            </div>
          </div>
          <div className="button-2">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-12.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Cargo Joggers</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 1,899.00</div>
            </div>
          </div>
          <div className="container">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-13.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Checked shirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 2,299.00</div>
            </div>
          </div>
          <div className="container-2">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-14.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Checked shirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 2,299.00</div>
            </div>
          </div>
          <div className="container-3">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-15.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Checked shirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 2,299.00</div>
            </div>
          </div>
          <div className="container-4">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-16.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Sweatshirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 799.00</div>
            </div>
          </div>
          <div className="container-5">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-17.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Sweatshirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 799.00</div>
            </div>
          </div>
          <div className="container-6">
            <div className="overlap-group-3">
              <img className="image-7" alt="Image" src="/img/image-18.png" />
              <div className="text-input" />
              <div className="text-input-2" />
              <div className="cargotrousers">Sweatshirt</div>
              <div className="cargotrousers-2">Buy Now</div>
              <div className="rs">Rs 799.00</div>
            </div>
          </div> */}
          <div className="text-wrapper-7">Load More</div>
          <img className="arrow" alt="Arrow" src="/img/arrow-2.svg" />
        </div>
      </div>

      <div className="tooltip">
        <div className="overlap-group">
          <div className="pAndText2">
            <p className="p">
              <span className="text-wrapper">
                Corporate Info
                <br />
              </span>
              <ul className="span">
                <li>Career</li>
                <li>Press</li>
                <li>Investor relations</li>
                <li>Corporate governance</li>
                <li>Cookie Settings</li>
              </ul>
            </p>
            <p className="text-wrapper-2">
              Stay Connected with Us! Discover the best omiyage from Japan and
              be in the know about exclusive offers and cultural insights
              <br />
              <br /> [Explore More]
            </p>
          </div>
          <div className="div-2AndImage">
            <div className="div-2">
              <span className="text-wrapper">Help</span>
              <ul className="span">
                <li>Customer Service</li>
                <li>Legal & Privacy</li>
                <li>Contact</li>
                <li>Report a scam</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <img className="image" alt="Image" src="/img/image.png" />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
