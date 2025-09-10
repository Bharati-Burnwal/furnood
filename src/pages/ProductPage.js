import Product from "../data/Product";
import Productcard from "../components/Productcard";
import Innerbanner from "../components/Innerbanner";
import "../components/css/product.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const ProductPage = () => {
  const [products, setProducts] = useState(Product);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;

  // Sorting
  const [sortOption, setSortOption] = useState("relevance");

  const handleSortChange = (val) => {
    setSortOption(val);
    setCurrentPage(1); // reset to page 1 after sorting

    let sortedProduct = [...Product]; // always sort original data

    if (val === "relevance") {
      sortedProduct = [...Product];
    } else if (val === "name-asc") {
      sortedProduct.sort((a, b) => a.name.localeCompare(b.name));
    } else if (val === "name-dec") {
      sortedProduct.sort((a, b) => b.name.localeCompare(a.name));
    } else if (val === "low-price") {
      sortedProduct.sort((a, b) => a.price - b.price);
    } else if (val === "high-price") {
      sortedProduct.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProduct);
  };

  // Get current page products
  const indexOfLast = currentPage * productPerPage;
  const indexOfFirst = indexOfLast - productPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <Innerbanner />
      

      <div className="product-sec pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="sec-title">Our Products</h2>
            </div>

            <div className="col-lg-3">
              <div className="left-sidebar">
                <div className="sort">
                  <h5>Sort Options</h5>
                  {[
                    { value: "relevance", label: "Most Relevance" },
                    { value: "name-asc", label: "Alphabetical (A-Z)" },
                    { value: "name-dec", label: "Alphabetical (Z-A)" },
                    { value: "low-price", label: "Price Low to High" },
                    { value: "high-price", label: "Price High to Low" },
                  ].map((option) => (
                    <div className="form-check" key={option.value}>
                      <input
                        type="radio"
                        className="form-check-input"
                        onChange={() => handleSortChange(option.value)}
                        checked={sortOption === option.value}
                      />
                      <label className="form-check-label">{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="col-lg-9">
              <div className="row">
                <h5 id="pageno">-- You are on page no {currentPage}</h5>
                {currentProducts.map((item) => (
                  <div className="col-lg-4 col-md-6" key={item.id}>
                    <Link to={`/product/${item.id}`}>
                      <Productcard product={item} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-part">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-9">
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <KeyboardDoubleArrowLeftIcon/>
                </button>

                {Array.from(
                  { length: Math.ceil(products.length / productPerPage) },
                  (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={currentPage === i + 1 ? "active" : ""}
                    >
                      {i + 1}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      prev < Math.ceil(products.length / productPerPage)
                        ? prev + 1
                        : prev
                    )
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(products.length / productPerPage)
                  }
                >
                  <KeyboardDoubleArrowRightIcon/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
