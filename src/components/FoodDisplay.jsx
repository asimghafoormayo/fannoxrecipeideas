import React from 'react'
import { useSelector } from 'react-redux'
import FoodItem from './FoodItem'

const FoodDisplay = () => {

  const foodList = useSelector(store => store.fooditems)
  
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Delicious Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodList.map((item) => (
            <FoodItem key={item.id} item={item}></FoodItem>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodDisplay