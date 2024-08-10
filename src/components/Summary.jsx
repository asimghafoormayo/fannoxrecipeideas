import React from 'react'

const Summary = ({filteredFoodItems}) => {

    const totalItems = filteredFoodItems.length;
    const totalPrice = filteredFoodItems.reduce((sum, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
      return sum + price;
    }, 0).toFixed(2);

  return (
    <div className="w-full md:w-1/4 px-4 mt-10 md:mt-0">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Summary</h3>
          <div className="flex justify-between mb-4">
            <span className="text-lg font-medium">Total Items:</span>
            <span className="text-lg font-medium">{totalItems}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-lg font-medium">Total Price:</span>
            <span className="text-lg font-medium">${totalPrice}</span>
          </div>
          <button className="bg-red-500 text-2xl px-4 py-2 text-white text-center rounded-md hover:bg-red-600">Place Order Now</button>
        </div>
      </div>
  )
}

export default Summary