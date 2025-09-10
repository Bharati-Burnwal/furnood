import "./css/about.css";

const About2 = () => {
  const features = [
    "Compact Design",
    "Creative Design",
    "Space Saver",
    "Custom Fit",
    "Flexible Layout",
    "Minimal Style",
    "Smart Storage",
    "Efficient Use",
  ];
  return (
    <>
      <div className="about-myself">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h4>Beautiful Furniture</h4>
              <h2>Fitting Every Home Space</h2>
              <p>
                Curabitur et lorem id purus venenatis eleifend id eu turpis.
                Vivamus fringilla lectus sed tellus viverra hendrerit. Quisque
                metus leo, rhoncus sit amet massa vitae, vulputate blandit
                massa.
              </p>
              <ul>
                {features.map((value, index) => (
                  <li key={index}>
                    <img src="./images/abouticon.svg" alt="about-icon" />
                    {value}
                  </li>
                ))}
              </ul>
              <a href="shop.js" className="main-btn">EXPLORE MORE</a>
            </div>
            <div className="offset-lg-1 col-md-6">
                <div class="about-img">
                  <img src="./images/about.png" alt="about-img" className="img-fluid"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default About2;
