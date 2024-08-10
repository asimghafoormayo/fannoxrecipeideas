import React from 'react'
import { useDispatch } from "react-redux"
import { addToCartActions }  from '../store'

const CartFoodItems = ({filteredFoodItems}) => {

  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) =>{
    dispatch(addToCartActions.removeFromCartItem(id))
  }
    
  return (
    <div className="w-full md:w-3/4 px-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Items in Cart</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredFoodItems.map(item => (
        <div key={item.id} className="border rounded-lg p-4 bg-white shadow-md">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-lg font-bold">{item.price}</p>
          <button className='bg-red-500 px-4 py-2 rounded-md text-white mt-4' onClick={() =>{handleRemoveFromCart(item.id)}}>Remove</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CartFoodItems