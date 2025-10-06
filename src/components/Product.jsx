

import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";


const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);

  // const [products, getProducts] = useState([])

  useEffect(() => {

    dispatch(getProducts());
    // (
    //   async () => {
    //     try {
    //       const response = await fetch("https://fakestoreapi.com/products");
    //       const data = await response.json();
    //       getProducts(data);
    //     }
    //     catch (error) {
    //       console.error("Error fetching products:", error);
    //     }
    //   }
    // )();
  }, [dispatch]);

  if (status == StatusCode.LOADING) {
    return <p>Loading.......</p>
  }
  if (status == StatusCode.ERROR) {
    return <p>Sometihiong Went Wrong</p>
  }


  const addToCart = (product) => {
    dispatch(add(product));
  }

  const card = products.map(product => (
    <div className="max-w-sm bg-white border p-8 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="" >
        <img className="w-[100px] h-[130px] rounded-t-lg  object-cover  mx-auto" src={product.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$  {product.price}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        <a className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(product)}>
          Add to Card
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>

  ))

  console.log("CHECKING CArds--->", card)

  return (
    <div className="flex flex-wrap gap-3">
      {card}
    </div>

  );
};

export default Product;
