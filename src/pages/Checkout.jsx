import Innerbanner from "../components/Innerbanner";
import "./css/checkout.css";
import { useState } from "react";

const Checkout = () => {
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    state: '',
    email: '',
    phone: '',
    paymentMethod: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Shipping Details Validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zip.trim()) newErrors.zip = 'Zip code is required';
    if (!/^\d{5}$/.test(formData.zip)) newErrors.zip = 'Invalid zip code';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';

    // Payment Validation
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
    if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = 'Invalid card number';
    if (!formData.expiryMonth) newErrors.expiryMonth = 'Expiry month is required';
    if (!formData.expiryYear) newErrors.expiryYear = 'Expiry year is required';
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    if (!/^\d{3}$/.test(formData.cvv)) newErrors.cvv = 'Invalid CVV';

    // Terms and Conditions Validation
    if (!formData.termsAccepted) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the form submission

    if (formData.cardNumber === '0000000000000000') {
      alert('Order submitted successfully!');
    } else {
      alert('Invalid card number');
      return;
    }

      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <>
      <Innerbanner />
      <section className="checkout-section">
        <div className="container">
          

            <form onSubmit={handleSubmit}>
              <div className="row">
              <div className="col-lg-8">
                <h2 className="checkout-title">Shopping Details</h2>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="address"
                    placeholder="1234 Main St"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label" htmlFor="city">
                      City
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      id="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label" htmlFor="zip">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                      id="zip"
                      placeholder="Zip"
                      maxLength={5}
                      value={formData.zip}
                      onChange={handleChange}
                    />
                    {errors.zip && (
                      <div className="invalid-feedback">{errors.zip}</div>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="country">
                    Country
                  </label>
                  <select
                    className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                  {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                  <select
                    className={`form-select ${errors.state ? 'is-invalid' : ''}`}
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Select State</option>
                    <option value="ny">New York</option>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                  </select>
                  {errors.state && (
                    <div className="invalid-feedback">{errors.state}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    placeholder="Enter phone number"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>



                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <label className="form-label d-block">Billing Address same as Shipping</label>
                  <div className="radio-wrap">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="billingSame"
                        id="billingSameYes"
                        value="yes"
                        defaultChecked
                        onChange={() => setShowBillingForm(false)}
                      />
                      <label className="form-check-label" htmlFor="billingSameYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="billingSame"
                        id="billingSameNo"
                        value="no"
                        onChange={() => setShowBillingForm(true)}
                      />
                      <label className="form-check-label" htmlFor="billingSameNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {showBillingForm && (
                  <div className="billing-form mt-4">
                    <h2 className="checkout-title">Billing Details</h2>
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <label className="form-label" htmlFor="billingFirstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingFirstName"
                            placeholder="Enter first name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label" htmlFor="billingLastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingLastName"
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="billingAddress">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="billingAddress"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <label className="form-label" htmlFor="billingCity">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingCity"
                            placeholder="City"
                          />
                        </div>
                        <div className="col-md-6 mb-3 mb-md-0">
                          <label className="form-label" htmlFor="billingZip">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="billingZip"
                            placeholder="Zip"
                            maxLength={5}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="billingCountry">
                          Country
                        </label>
                        <select className="form-select" id="billingCountry">
                          <option value="">Select Country</option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="billingState">
                          State
                        </label>
                        <select className="form-select" id="billingState">
                          <option value="">Select State</option>
                          <option value="ny">New York</option>
                          <option value="ca">California</option>
                          <option value="tx">Texas</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="billingEmail">
                          Email ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="billingEmail"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="billingPhone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="billingPhone"
                          placeholder="Enter phone number"
                          maxLength={10}
                        />
                      </div>
                    </form>
                  </div>
                )}


                <div className="payment">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="paymentMethod">
                      Payment Method
                    </label>
                    <select
                      className={`form-select ${errors.paymentMethod ? 'is-invalid' : ''}`}
                      id="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                    >
                      <option value="">Select Payment Method</option>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="discover">Discover</option>
                    </select>
                    {errors.paymentMethod && (
                      <div className="invalid-feedback">{errors.paymentMethod}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                      id="cardNumber"
                      placeholder="Enter card number"
                      maxLength={16}
                      value={formData.cardNumber}
                      onChange={handleChange}
                    />
                    {errors.cardNumber && (
                      <div className="invalid-feedback">{errors.cardNumber}</div>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="expiryMonth">
                        Expiry Month
                      </label>
                      <select
                        className={`form-select ${errors.expiryMonth ? 'is-invalid' : ''}`}
                        id="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={handleChange}
                      >
                        <option value="">Month</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      {errors.expiryMonth && (
                        <div className="invalid-feedback">{errors.expiryMonth}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="expiryYear">
                        Expiry Year
                      </label>
                      <select
                        className={`form-select ${errors.expiryYear ? 'is-invalid' : ''}`}
                        id="expiryYear"
                        value={formData.expiryYear}
                        onChange={handleChange}
                      >
                        <option value="">Year</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                      {errors.expiryYear && (
                        <div className="invalid-feedback">{errors.expiryYear}</div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
                      id="cvv"
                      placeholder="CVV"
                      maxLength={3}
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                    {errors.cvv && (
                      <div className="invalid-feedback">{errors.cvv}</div>
                    )}
                  </div>
                </div>

              </div>
              <div className="col-lg-4">
                <h4>Your Order Details</h4>
                <div className="order-summary">
                  <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                    <h6 className="mb-0">Products</h6>
                    <h6 className="mb-0">Total</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0">Modern Sofa</p>
                    <p className="mb-0">$499</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0">Wooden Chair</p>
                    <p className="mb-0">$149</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between my-3 border-top border-bottom py-2">
                    <strong>Subtotal</strong>
                    <strong>$648</strong>
                  </div>
                </div>
                <div className="checkout-terms">
                  <div className="form-check mb-2">
                    <input
                      className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                      type="checkbox"
                      id="termsCheckbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => {
                        handleChange({
                          target: {
                            id: 'termsAccepted',
                            value: e.target.checked
                          }
                        });
                      }}
                      style={{ verticalAlign: "top" }}
                    />
                    <label className="form-check-label" htmlFor="termsCheckbox" style={{ verticalAlign: "top" }}>
                      <p style={{ marginBottom: 0 }}>
                        I am at least 18 years of age and agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and conditions</a> &amp; <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy policy</a>. By clicking the Order Now button and submitting this order, If this product is not right for me, or I have any questions, contact customer service with any questions by calling <a href="tel:800-285-3051">800-285-3051</a> or e-mailing <a href="mailto:support@statementjewelryshop.com">support@statementjewelryshop.com</a>. Charges will appear on my credit card statements as 8002853051statementjew. Standard shipping orders will be processed and shipped with USPS within about 1 business day. Shipping time is estimated to be 5-7 business days from when your order ships out. Thank you for your business.
                      </p>
                    </label>
                    {errors.terms && (
                      <div className="invalid-feedback d-block">{errors.terms}</div>
                    )}
                  </div>
                </div>
                <button type="submit" className="main-btn w-100 mt-3">
                  Place Order
                </button>

              </div>
              </div>
            </form>
          
        </div>
      </section>
    </>
  );
};
export default Checkout;
