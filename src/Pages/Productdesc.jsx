import React from "react";
import "./Prodesc.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/action/productActions";

const Productdesc = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product._id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  console.log(product);
  return (
    <div className="main">
      {product && Object.keys(product).length && (
        <div class="prodesc">
          <div class="leftimg">
            <img src={product.image} alt="" />
          </div>
          <div class="rightdesc">
            <div class="productText">
              <h4 id="category"> {product.title.shortTitle} </h4>
              <h2> {product.title.longTitle} </h2>
              <p> {product.desc} </p>
              <h3> Price : ₹ {product.price} /- </h3>
              <div class="features">
                <h4 id="features">features :</h4>
                <div class="two">
                  <div class="one">
                    <li>4 years Warranty </li>
                    <li>100% Original</li>
                  </div>
                  <div class="second">
                    <li>4 years Warranty </li>
                    <li>100% Original</li>
                  </div>
                </div>
              </div>
              <div class="biding">
                <div className="addtocart">Add to Cart</div>
                <div className="buynow">Buy Now</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdesc;
