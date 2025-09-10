import './css/product.css';

const Productcard = ({product}) => {
    return(
        <div className="productcard">
            <div className="pro-img">
                <img src={product.image[0]} alt="pro-img" className="img-fluid"/>
            </div>
            <div className="pro-txt">                
                <h4>{product.name}</h4>
                <h6>Wooden Furniture</h6>
                <span>
                    <p>${(product.price).toFixed(2)}</p>
                    <del>${(product.price + 50).toFixed(2)}</del>
                </span>
            </div>
        </div>
    );
}

export default Productcard;
