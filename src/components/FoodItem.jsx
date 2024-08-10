import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartActions } from '../store'

const FoodItem = ({item}) => {

  const cartFoodListItems = useSelector(store => store.cart);
  const foodListItems = useSelector(store => store.fooditems);
  const isItemInCart = cartFoodListItems.includes(item.id);

    const dispatch = useDispatch()

    const handleAddToCart = () =>{
        dispatch(addToCartActions.addToCartItem(item.id))
        
    }

    const handleRemoveFromCart = () =>{
      dispatch(addToCartActions.removeFromCartItem(item.id))
    }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
              <p className="text-gray-900 font-bold mt-2">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">{item.category}</p>
              { isItemInCart ? <button className='bg-red-500 px-4 py-2 rounded-md text-white mt-4' onClick={handleRemoveFromCart}>Remove</button> : <button className='bg-red-500 px-4 py-2 rounded-md text-white mt-4' onClick={handleAddToCart}>Add to Cart</button>  }
              
              
            </div>
          </div>
  )
}

export default FoodItem