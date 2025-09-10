import { useParams } from "react-router-dom";
import Product from "../data/Product.js";
import Slider from "react-slick";
import { useState } from "react";
import InnerBanner from "../components/Innerbanner.jsx";
import "../components/css/product.css";
import { Link } from "react-router-dom";
import Productcard from "../components/Productcard.js";

const ProductDetails = () => {
  const { id } = useParams();
  const productitem = Product.find((item) => item.id === Number(id));
  const [mainImg, setMainImg] = useState(productitem.image[0]);

  const thumbnailSettings = {
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
  };
  // ======================Quantity=========================
  const [quantity, setQuantity] = useState(1);
  const changeQty = (e) => {
    if (e === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (e === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // =====================Related Products======================

  const relatedProducts = Product.filter((x) => x.id !== productitem.id);
  console.log("Related Product", relatedProducts);

  const relatedProSetting = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  //   ==============================Add to Cart==========================

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Naya product object
    const productToAdd = {
      id: productitem.id,
      name: productitem.name,
      price: productitem.price,
      quantity: quantity,
      image: productitem.image[0],
    };

    // Cart me naya product add karo
    cartItems.push(productToAdd);

    // Cart ko localStorage me save karna
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <>
      <InnerBanner />
      <section className="product-details">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="pro-details-img">
                <div className="product-slider">
                  <Slider {...thumbnailSettings}>
                    {productitem.image.map((img, index) => (
                      <div key={index} onClick={() => setMainImg(img)}>
                        <img
                          src={img}
                          alt="slider-img"
                          className={mainImg === img ? "active" : ""}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="main-img">
                  <img src={mainImg} alt="Product-img" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h2>{productitem.name}</h2>
              <h4>${(productitem.price * quantity).toFixed(2)}</h4>
              <p>{productitem.description}</p>
              <h6>Category : {productitem.category}</h6>
              <div class="btn-wrap mt-5">
                <div className="quantity">
                  <button onClick={() => changeQty("dec")}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={() => changeQty("inc")}>+</button>
                </div>
                <div className="cart-btn-div">
                  <Link to="/cart" className="cart-btn" onClick={addToCart}>Add To Cart </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-info-tabs my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active p-0"
                    id="desc-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#desc"
                    type="button"
                    role="tab"
                    aria-controls="desc"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link p-0"
                    id="addinfo-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#addinfo"
                    type="button"
                    role="tab"
                    aria-controls="addinfo"
                    aria-selected="false"
                  >
                    Additional Information
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-3" id="productTabContent">
                <div
                  className="tab-pane fade show active"
                  id="desc"
                  role="tabpanel"
                  aria-labelledby="desc-tab"
                >
                  <p>{productitem.details} </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="addinfo"
                  role="tabpanel"
                  aria-labelledby="addinfo-tab"
                >
                  <ul>
                    {productitem.information.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-products my-5">
        <div className="container">
          <h3 className="mb-4">Related Products</h3>
          <div className="row">
            <Slider {...relatedProSetting}>
              {relatedProducts.map((item) => (
                <div key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <Productcard product={item} />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
