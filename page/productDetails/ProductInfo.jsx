import React, { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './productDetails.css'

function ProductInfo({ product }) {


      const { cartItems, addToCart } = useContext(CartContext);

      const isInCart = cartItems.some(i => i.id === product.id);


        const navigate = useNavigate();



          const handleAddToCart = () => {
      addToCart(product); 

      toast.success(
        <div className="toast-wrapper">
          <img src={product.images[0]} alt="" className="toast-img"/>
          <div className="toast-content">
            <strong>{product.title}</strong>
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
    <div className="details_item">
      <h1 className='name'>{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>

      <p className='price'>$ {product.price}</p>

      <h5>Availability:<span>{product.availabiltyStatus}</span> </h5>
      <h5>Brand:<span> {product.brand} </span> </h5>
      <p className='desc'> {product.description} </p>
      <h5 className='stock'> <span>Hurry Up! Only {product.stock} products left in stock.</span>  </h5>


      <button onClick={handleAddToCart} className={`btn ${isInCart ? 'inCart' : ''}`}>
        {isInCart ? "item in cart" :"Add to cart"}      <TiShoppingCart />
      </button>


      <div className="icons">
        <span><FaRegHeart /></span>
        <span><FaShare /></span>
      </div>


    </div>
  )
}

export default ProductInfo
