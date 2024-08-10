import React from 'react'
import backgroundImage from '../images/backgroundimage.jpg'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: '100%',
          maxWidth: '80%',
          margin: '5% auto 10%'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl px-12 text-white text-center md:text-left fade-in">
        <h1 className="text-4xl md:text-6xl font-bold">Delicious Recipes</h1>
        <p className="mt-4 text-lg md:text-xl">
          Find the best recipes for breakfast, lunch, and dinner. Enjoy cooking with fresh ingredients and simple instructions.
        </p>
        <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800">
          Explore Now
        </button>
      </div>
    </div>
  )
}

export default Hero