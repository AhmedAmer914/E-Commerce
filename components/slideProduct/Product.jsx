import React, { useContext, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Product({item}) {


  const navigate = useNavigate();

    const { cartItems, addToCart } = useContext(CartContext);
    

    const isInCart = cartItems.some(i => i.id === item.id);
    
    const handleAddToCart = () => {
      addToCart(item); 

      toast.success(
        <div className="toast-wrapper">
          <img src={item.images[0]} alt="" className="toast-img"/>
          <div className="toast-content">
            <strong>{item.title}</strong>
            Added to Cart
            <div>
              <button className="btn" onClick={() => navigate('/cart')}> View Cart</button>
            </div>
          </div>
        </div>
        ,{duration: 3500}
      )
    
    }

    

  return (
    <div className={`product ${isInCart ? 'inCart' : ''}`}>

      <Link to={`/products/${item.id}`} >



      <span className="status_cart"><FaCheck /> in cart </span>



        <div className="img_product">
        <img src={item.images[0]}/>
      </div>

      <p className="name_product">{item.title}</p>

      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>

      <p className="price"><span>$ {item.price}</span></p>
      
      </Link>
    

      <div className="icons">
        <span className="btn_cart" onClick={handleAddToCart}><FaCartArrowDown /></span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
