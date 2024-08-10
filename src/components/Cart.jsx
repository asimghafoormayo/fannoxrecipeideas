import React from 'react'
import { useSelector } from 'react-redux'
import CartFoodItems from './CartFoodItems'
import Summary from './Summary'

const Cart = () => {

  const cartFoodListItems = useSelector(store => store.cart)
  const FoodListItems = useSelector(store => store.fooditems)

  const filteredFoodItems = FoodListItems.filter(item => cartFoodListItems.includes(item.id));

 
  

  return (
   <>
   <div className="flex flex-col md:flex-row mt-10 mb-10">

      <CartFoodItems filteredFoodItems={filteredFoodItems}></CartFoodItems>

      <Summary filteredFoodItems={filteredFoodItems}></Summary>   

      
    </div>
   </>
  )
}

export default Cart