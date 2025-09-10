import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RangeSlider = () => {
  const image = [
    "./images/ins1.png",
    "./images/ins2.png",
    "./images/ins3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return(
    <>
      <div className="rangeslider">
        <Slider {...settings}>
          {image.map((item, index) => (
            <div key={index}>
              <img src={item} alt="slider"/>
            </div>
          ))}  
        </Slider>        
      </div>
    </>
  )

};

export default RangeSlider;
