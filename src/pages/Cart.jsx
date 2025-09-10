import "./css/cart.css";
import Innerbanner from "../components/Innerbanner";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {
  const [cartItem, setcartItem] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItem(savedCart);
  }, []);

  const deletecart = (e) => {
    const updateCart = cartItem.filter((x) => x.id !== e);
    setcartItem(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const clearCart = () => {
    setcartItem([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return (
    <>
      <Innerbanner />
      <section className="cart-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart">
                {cartItem.length === 0 ? (
                  <div className="nocartItem text-center">
                    <img src="/images/cart.jpg" alt="empty_cart"/>
                      <h2 className="my-4 fw-bolder">Your Cart is <span>Empty!</span></h2>
                      <h6>Must add items on the cart before you preceed to check out.</h6>
                      <Link to={'/products'} className="main-btn mx-auto mt-5">Return To Shop</Link>
                  </div>
                ) : (
                <>
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item) => (
                      <tr key={item.id}>
                        <td className="cart-img">
                          <img src={item.image} alt="cart-img" />
                        </td>
                        <td>
                          <h6>{item.name}</h6>
                        </td>
                        <td>
                          <h6>${item.price}</h6>
                        </td>
                        <td>
                          <div>{item.quantity}</div>
                        </td>
                        <td>{(item.price * item.quantity).toFixed(2)}.</td>
                        <td
                          className="delete"
                          onClick={() => deletecart(item.id)}
                        >
                          <DeleteIcon />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>                
                <div className="cart-btn-wrap d-flex justify-content-between mt-5">
                  <button className="main-btn" onClick={clearCart}>Clear Cart</button>
                  <Link to="/checkout" className="main-btn">Go To Checkout</Link>
                </div>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
