import "./css/home.css";
import About1 from "../components/About1";
import About2 from "../components/About2";
import Product from "../data/Product";
import Productcard from "../components/Productcard";
import "../components/css/product.css";
import HomeSlider from "../components/HomeSlider";
import { useState } from "react";

const Home = () => {

  const[visiblepro, setVisiblepro] = useState(8);
  const loadmore = () => {
    setVisiblepro((prev) => prev + 8);
  }

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="banner-text">
                <h4>New Arrival</h4>
                <h1>Discover Our New Collection</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <a href="shop" className="main-btn">
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About1 />
      <About2 />
      <div class="product-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="sec-title">Our Products</h2>
            </div>
            {Product.slice(0, visiblepro).map((item) => (
              <div class="col-lg-3 col-md-6">
                <Productcard product={item} key={item.id} />
              </div>
              
            ))}
            {visiblepro < Product.length && (
              <div class="col-lg-12">
                <button className="main-btn" onClick={loadmore} toggle>Show More</button>
            </div>
            )}
            
          </div>
        </div>
      </div>
      <HomeSlider/>
    </>
  );
};

export default Home;
