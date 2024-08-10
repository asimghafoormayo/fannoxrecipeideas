import React from 'react'
import image1 from '../images/backgroundimage.jpg'

const Menu = () => {
  return (
    <section className="relative py-4 px-4 md:px-10 mb-20">
      <div className="relative w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="md:text-left text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Our Menu</h2>
          <p className="mt-2 text-lg md:text-xl">
            Explore our diverse menu offerings, featuring a variety of delicious dishes crafted with the freshest ingredients.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <img src={image1} alt="Dish 1" className="rounded-lg w-full h-auto object-cover" />
          <img src={image1} alt="Dish 2" className="rounded-lg w-full h-auto object-cover" />
          <img src={image1} alt="Dish 3" className="rounded-lg w-full h-auto object-cover" />
          <img src={image1} alt="Dish 4" className="rounded-lg w-full h-auto object-cover" />
          <img src={image1} alt="Dish 5" className="rounded-lg w-full h-auto object-cover" />
          <img src={image1} alt="Dish 6" className="rounded-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Menu