import React from 'react'

const page = () => {
  return (
    <>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Casual</title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      rel="stylesheet"
    />
    <div className="container mx-auto p-4">
      <nav className="text-sm text-gray-500 mb-4">
        <a className="hover:underline" href="#">
          Home
        </a>
        &gt;
        <span>Casual</span>
      </nav>
      <div className="flex">
        {/* Filters Section */}
        <aside className="w-1/4 pr-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  T-shirts
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Shorts
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Shirts
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Hoodie
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Jeans
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price</h3>
            <input className="w-full" max={200} min={50} type="range" />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Colors</h3>
            <div className="flex space-x-2">
              <button className="w-6 h-6 rounded-full bg-red-500"></button>
              <button className="w-6 h-6 rounded-full bg-orange-500"></button>
              <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
              <button className="w-6 h-6 rounded-full bg-green-500"></button>
              <button className="w-6 h-6 rounded-full bg-blue-500"></button>
              <button className="w-6 h-6 rounded-full bg-purple-500"></button>
              <button className="w-6 h-6 rounded-full bg-pink-500"></button>
              <button className="w-6 h-6 rounded-full bg-black"></button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-2 py-1 border rounded">XX-Small</button>
              <button className="px-2 py-1 border rounded">X-Small</button>
              <button className="px-2 py-1 border rounded">Small</button>
              <button className="px-2 py-1 border rounded">Medium</button>
              <button className="px-2 py-1 border rounded bg-gray-200">
                Large
              </button>
              <button className="px-2 py-1 border rounded">X-Large</button>
              <button className="px-2 py-1 border rounded">XX-Large</button>
              <button className="px-2 py-1 border rounded">3X-Large</button>
              <button className="px-2 py-1 border rounded">4X-Large</button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Dress Style</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Casual
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Formal
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Party
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Gym
                </a>
              </li>
            </ul>
          </div>
          <button className="w-full py-2 bg-black text-white rounded-full border border-black hover:bg-gray-800">
            Apply Filter
          </button>
        </aside>
        {/* Products Section */}
        <main className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Casual</h1>
            <div className="text-sm text-gray-500">
              Showing 1-10 of 100 Products &nbsp; Sort by:
              <span className="font-semibold">Most Popular</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Gradient Graphic T-shirt"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/M5uQkUV5UTYMGNDz8Sol9vf37c6vbswltBQ6M4NU0xfXGp4TA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Gradient Graphic T-shirt</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">3.5/5</span>
              </div>
              <div className="text-xl font-semibold">$145</div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Polo with Tipping Details"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/LtGKul7GPiIFM9UVFwFcUVIp2VzR85PmNIiPkyBfiVSPjU8JA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Polo with Tipping Details</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">4.5/5</span>
              </div>
              <div className="text-xl font-semibold">$180</div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Black Striped T-shirt"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/N1GeMByohxyzIaWkeueREsgKWrmhovEGGIwgybFDOrHENSxnA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Black Striped T-shirt</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">5.0/5</span>
              </div>
              <div className="text-xl font-semibold">
                $120
                <span className="line-through text-gray-500">$150</span>
                <span className="text-red-500">-30%</span>
              </div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Skinny Fit Jeans"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/Vo0nzmtfLfrOrEWDdpdOZM8OcfTDPic5rlHfQmFWNP2vZkiPB.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Skinny Fit Jeans</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">3.0/5</span>
              </div>
              <div className="text-xl font-semibold">
                $240
                <span className="line-through text-gray-500">$260</span>
                <span className="text-red-500">-20%</span>
              </div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Checkered Shirt"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/tLlRN1eN8z36ayOZQWNAYDkb8xfUCfNeeJ3c3xuyZfRYmRKeJA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Checkered Shirt</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">4.5/5</span>
              </div>
              <div className="text-xl font-semibold">$180</div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Sleeve Striped T-shirt"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/bw7kW0lRO9rgNhfbUwBL4fkahVfoEnxa6fhyfvpx5fUeQjU8JA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Sleeve Striped T-shirt</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">3.0/5</span>
              </div>
              <div className="text-xl font-semibold">
                $130
                <span className="line-through text-gray-500">$160</span>
                <span className="text-red-500">-30%</span>
              </div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Vertical Striped Shirt"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/m9uqhlW6GpI2KlXAz92lncZFs7u6fDPYdZkcKIT3b8edGp4TA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Vertical Striped Shirt</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">3.0/5</span>
              </div>
              <div className="text-xl font-semibold">$240</div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4">
              <img
                alt="Courage Graphic T-shirt"
                className="w-full mb-4 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/eCpmnw3gDfsl4EIedq9ofgeqgiIt7fwHwe4UfD4fO9CpANSxnA.jpg"
                width={200}
              />
              <h2 className="text-lg font-semibold">Courage Graphic T-shirt</h2>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-2 text-sm text-gray-500">3.0/5</span>
              </div>
              <div className="text-xl font-semibold">$130</div>
            </div>
            {/* Product Card */}
            <div className="border rounded-lg p-4"></div>
          </div>
        </main>
      </div>
    </div>
  </>
  
  )
}

export default page
