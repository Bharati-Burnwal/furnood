import './css/thankyou.css';

const ThankYou = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="thanks text-center">
            <div className="thank-you">
              <img src="./images/thanks.png" alt="" className='mb-3'/>
              <h1>Thank You for Your Order!</h1>
              <p className='text-dark'>Your order has been successfully processed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
