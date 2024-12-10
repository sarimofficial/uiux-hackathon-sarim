import React from 'react'

const page = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Cart</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="container mx-auto p-4">
    <nav className="text-gray-500 mb-4">
      <a className="hover:underline" href="#">
        Home
      </a>
      &gt;
      <span>Cart</span>
    </nav>
    <h1 className="text-4xl font-extrabold mb-6">YOUR CART</h1>
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              alt="Gradient Graphic T-shirt"
              className="w-24 h-24 rounded-lg"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/nn1hVfRYqVTjDaj6lpRGx3RWQfMw4Z0J7z7VT5Okv7W8Pp4TA.jpg"
              width={100}
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Gradient Graphic T-shirt</h2>
              <p>Size: Large</p>
              <p>Color: White</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">$145</p>
            <div className="flex items-center mt-2">
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l-lg">
                -
              </button>
              <span className="px-4">1</span>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r-lg">
                +
              </button>
            </div>
          </div>
          <button className="text-red-500 ml-4">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              alt="Checkered Shirt"
              className="w-24 h-24 rounded-lg"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/hwwISRFQqWLDLhGHPBGQa07aKkAcNKsOyAGGg7Affq5efkiPB.jpg"
              width={100}
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Checkered Shirt</h2>
              <p>Size: Medium</p>
              <p>Color: Red</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">$180</p>
            <div className="flex items-center mt-2">
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l-lg">
                -
              </button>
              <span className="px-4">1</span>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r-lg">
                +
              </button>
            </div>
          </div>
          <button className="text-red-500 ml-4">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              alt="Skinny Fit Jeans"
              className="w-24 h-24 rounded-lg"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/L5E6jpF6y3bCDZJ2z4ecc52InFMuZmShiGGOjAIXK0qfPp4TA.jpg"
              width={100}
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Skinny Fit Jeans</h2>
              <p>Size: Large</p>
              <p>Color: Blue</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">$240</p>
            <div className="flex items-center mt-2">
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l-lg">
                -
              </button>
              <span className="px-4">1</span>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r-lg">
                +
              </button>
            </div>
          </div>
          <button className="text-red-500 ml-4">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span className="font-bold">$565</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Discount (-20%)</span>
          <span className="font-bold text-red-500">-$113</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Delivery Fee</span>
          <span className="font-bold">$15</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mb-6">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">$467</span>
        </div>
        <div className="flex items-center mb-6">
          <input
            className="flex-1 p-2 border rounded-l-lg"
            placeholder="Add promo code"
            type="text"
          />
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Apply
          </button>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center">
          <span>Go to Checkout</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</>

  )
}

export default page
