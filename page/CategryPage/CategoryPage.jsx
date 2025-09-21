import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../../components/slideProduct/Product';
import './categoryPage.css'
import SlidProductLoading from '../../components/slideProduct/SlidProductLoading';
import PageTransition from '../../components/PageTransition';


function CategoryPage() {
  const { category } = useParams();
  console.log(category);

  const [categoryProducts, setCategoryProducts] = useState([]); // array of products
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        // dummyjson returns { products: [...], total, ... }
        setCategoryProducts(Array.isArray(data.products) ? data.products : [])
      })
      .catch(error => {
        console.error(error)
        setCategoryProducts([])
      })
      .finally(() => setLoading(false))
  }, [category])

  console.log(categoryProducts);
  return (
    <PageTransition key={category}>
      <div className="category_products">
      {loading ? (
        <SlidProductLoading key={category} />
      ) : (
        <div className="container">
          <div className="top_slide">
            <h2>{category} : {categoryProducts.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="products">
              {categoryProducts.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </PageTransition>
  )
}

export default CategoryPage
