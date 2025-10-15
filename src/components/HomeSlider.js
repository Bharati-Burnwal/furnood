import './css/HomeSlider.css';
import RangeSlider from './RangeSlider';
import { Link } from 'react-router-dom';


const HomeSlider = () => {
    return(
        <>
            <div className="inspire">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <div class="ins-txt">
                                <h2>50+ Beautiful rooms inspiration</h2>
                                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                                <Link to="/" className="main-btn">EXPLORE MORE</Link>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <RangeSlider/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSlider;