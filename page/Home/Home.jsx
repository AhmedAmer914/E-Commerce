import React, { useState, useEffect } from "react";
import HeroSlider from "../../components/HeroSlider";
import "./Home.css";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import SlidProductLoading from "../../components/slideProduct/SlidProductLoading";
import PageTransition from "../../components/PageTransition";
const categories = [
  "smartphones",
  "laptops",
  "mobile-accessories",
  "mens-watches",
  "fragrances",
  "sunglasses",
  "womens-watches",
  "womens-bags",
  "womens-dresses",
  "womens-shoes",
  "beauty",
  "groceries",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await response.json();
            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);



      } catch (error) {
        console.error("Error fetching products:", error);
      }
      finally {
        setloading(false);
      }



    };
    fetchProduct();
  }, []);



  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {
          loading ? (

            <SlidProductLoading />


          ) : (

            categories.map((category) => (
              <SlideProduct key={category} data={products[category]} title={category.replace("-", " ")} />
            ))


          )}



      </div>
    </PageTransition>
  )
}

export default Home;
