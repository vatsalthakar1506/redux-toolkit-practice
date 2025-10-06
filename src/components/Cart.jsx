import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';


 
const Cart = () => {
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(remove(id));
    }


    const productCart = useSelector(state => state.cart);
    const cart = productCart.map(product => (
        <div className="max-w-sm bg-white border p-8 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="" >
                <img className="w-[100px] h-[130px] rounded-t-lg  object-cover  mx-auto" src={product.image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$  {product.price}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <a onClick={() => removeItem(product.id)} className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Remove Item
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

    ))



    return (
        <div>
            <div className="flex flex-wrap gap-3">
                {cart}
            </div>
        </div>
    )
}

export default Cart
