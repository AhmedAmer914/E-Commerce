import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetails.css';
import SlideProduct from '../../components/slideProduct/SlideProduct';
import ProductDetailsLodain from './ProductDetailsLodain';
import SlidProductLoading from '../../components/slideProduct/SlidProductLoading';
import ProductImages from './productimages';
import ProductInfo from './ProductInfo';
import PageTransition from '../../components/PageTransition';

// import { FaStar } from 'react-icons/fa';


function ProductDetails() {

  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState([true]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        setProduct(data);
        setLoading(false);

      } catch (error) {
        console.log("Error fetching product:", error);
      }

    }
    fetchProduct();
  }, [id])


  useEffect(() => {
    if (!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false))
  }, [product?.category])



  if (!product) return <p>Product Not Found </p>;


  return (


  <PageTransition key={id}>
      <div>
      {loading ? (
        <ProductDetailsLodain />
      ) : (
        <div className='item_details'>
          <div className="container">


            <ProductImages product={product} />
            <ProductInfo product={product} />

          </div>
        </div>
      )}





      {loadingRelatedProducts ? (
        <SlidProductLoading />
      ) : (
        <SlideProduct key={product.category} data={relatedProducts} title={product.category.replace("-", " ")} />
      )}


    </div>
  </PageTransition>


  )
}

export default ProductDetails
