"use client";

import React from 'react'

const Hero = () => {
  return (  
    <>
  {/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-10 px-4 md:px-8">
    {/* Text Content */}
    <div className="md:w-1/2 space-y-6">
      <h1 className="text-6xl  font-extrabold leading-tight text-gray-900">
        FIND CLOTHES
        <br />
        THAT MATCHES
        <br />
        YOUR STYLE
      </h1>
      <p className="text-gray-600 text-lg">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <a
        href="#"
        className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg shadow-lg hover:bg-gray-800"
      >
        Shop Now
      </a>
    </div>
    {/* Image */}
    <div className="md:w-1/2 mt-4 md:mt-0 right-10 left-11">
      <img
        src="./font (1).png"
        alt="Fashion Models"
      />
    </div>
  </section>
  {/* Statistics Section */}
  <section className="max-w-7xl mx-auto py-1 px-1 md:px-1 flex flex-wrap gap-6">
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-extrabold text-gray-900">200+</h2>
      <p className="text-gray-600">International Brands</p>
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-extrabold text-gray-900">2,000+</h2>
      <p className="text-gray-600">High-Quality Products</p>
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-extrabold text-gray-900">30,000+</h2>
      <p className="text-gray-600">Happy Customers</p>
    </div>
  </section>

  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Brand Showcase</title>
  {/* Brand Showcase Section */}
  <section className="flex flex-wrap items-center bg-black justify-center gap-8 py-6">
    {/* Brand Names */}
    <div className="text-white text-2xl font-semibold">VERSACE</div>
    <div className="text-white text-2xl font-semibold">ZARA</div>
    <div className="text-white text-2xl font-semibold">GUCCI</div>
    <div className="text-white text-2xl font-semibold">PRADA</div>
    <div className="text-white text-2xl font-semibold">Calvin Klein</div>
  </section>


  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Product Listings</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .product-image:hover {\n            transform: scale(1.05);\n            transition: transform 0.3s ease-in-out;\n        }\n    "
    }}
  />
  <div className="container mx-auto py-8">
    {/* New Arrivals Section */}
    <section className="mb-12">
      <h2 className="text-6xl  font-extrabold text-center mb-8 ">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Black T-shirt with Tape Details"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/yzYIoIUhW8JoGhiJGOpebXFChQGGWkeqg4ZUdxTscqPvTp4TA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">
            T-shirt with Tape Details
          </h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-xl font-bold">$120</p>
        </div>
        {/* Product 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Skinny Fit Jeans"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/ompSDiq1Mmq1M9x1fMJ0xDw5hovf2ZnsNg7RZBe5U7QvCRxnA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">Skinny Fit Jeans</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">3.5/5</span>
          </div>
          <p className="text-xl font-bold">
            $240 <span className="line-through text-gray-500">$260</span>{" "}
            <span className="text-red-500">20% off</span>
          </p>
        </div>
        {/* Product 3 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Checkered Shirt"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/dvmTSVV1MAbfcSz50lM6HOMAAHfiwtL8X2VygfOzOdm5CRxnA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">Checkered Shirt</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-xl font-bold">$180</p>
        </div>
        {/* Product 4 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Sleeve Striped T-shirt"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/ty0TboTwjE4cKFsRG7HXe08wH8MEweRVPEtzc9yOuixZho4TA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">Sleeve Striped T-shirt</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-xl font-bold">
            $130 <span className="line-through text-gray-500">$160</span>{" "}
            <span className="text-red-500">30% off</span>
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-200">
          View All
        </button>
      </div>
    </section>
    {/* Top Selling Section */}
    <section>
      <h2 className="text-6xl  font-extrabold text-center mb-8">TOP SELLING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Vertical Striped Shirt"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/UdJNKVWfCPz3Yi3mxPrzTv3PnCEgGeZLZ6ZODJ7lrLQaho4TA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">Vertical Striped Shirt</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">5.0/5</span>
          </div>
          <p className="text-xl font-bold">
            $212 <span className="line-through text-gray-500">$232</span>{" "}
            <span className="text-red-500">10% off</span>
          </p>
        </div>
        {/* Product 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Courage Graphic T-shirt"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/KgtNd49ZMKIhAxXSkAWRUpNuXy1NaCbNRKmqComBaaCVIKeJA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">
            Courage Graphic T-shirt
          </h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">4.0/5</span>
          </div>
          <p className="text-xl font-bold">$145</p>
        </div>
        {/* Product 3 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Loose Fit Bermuda Shorts"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/jIFGShzYaRoxIJbJprJMFD0i5g941ZbUwgkfy2MsoR6qQU8JA.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">
            Loose Fit Bermuda Shorts
          </h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">3.5/5</span>
          </div>
          <p className="text-xl font-bold">$80</p>
        </div>
        {/* Product 4 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <img
            alt="Faded Skinny Jeans"
            className="w-full h-64 object-cover mb-4 product-image"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/CWE8blt6Xj5FHRegQIieZdsnGf0kmUxEfZZwedHtI57bLEFfE.jpg"
            width={300}
          />
          <h3 className="text-lg font-semibold mb-2">Faded Skinny Jeans</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-yellow-500">
              <i className="fas fa-star" />
            </span>
            <span className="text-gray-400">
              <i className="fas fa-star" />
            </span>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <p className="text-xl font-bold">$210</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-200">
          View All
        </button>
      </div>
    </section>
  </div>
  <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Dress Styles</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .hover-zoom:hover img {\n            transform: scale(1.05);\n            transition: transform 0.3s ease-in-out;\n        }\n    "
    }}
  />
  <div className="max-w-7xl mx-auto p-6">
    {/* Browse by Dress Style Section */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-6xl  font-extrabold text-center mb-6">
        BROWSE BY DRESS STYLE
      </h2>
      <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Clothing Categories</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .hover-zoom:hover {\n            transform: scale(1.05);\n            transition: transform 0.3s ease-in-out;\n        }\n    "
    }}
  />
  <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover-zoom sm:col-span-1">
      <div className="w-full h-48 bg-white flex items-center justify-center">
        <img
          alt="Man in casual wear"
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/a1aa/image/HXQVR7ZY1nIuJxIzxQBglGlyZSjm6rXzJed33JpI7zgO2U8JA.jpg"
        />
      </div>
      <div className="absolute top-4 left-4 text-black text-2xl font-bold">
        Casual
      </div>
    </div>
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover-zoom sm:col-span-2">
      <div className="w-full h-48 bg-white flex items-center justify-center">
        <img
          alt="Man in formal wear"
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/a1aa/image/W6l14riGwfzEf0xFChvxKgZwGn3bXzi1TuAnydk9ztncsp4TA.jpg"
        />
      </div>
      <div className="absolute top-4 left-4 text-black text-2xl font-bold">
        Formal
      </div>
    </div>
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover-zoom sm:col-span-2">
      <div className="w-full h-48 bg-white flex items-center justify-center">
        <img
          alt="Woman in party wear"
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/a1aa/image/jyDVlTPVXewOMqIlxNSdIwFiOLkS6HjNrlEKirQO8toP2U8JA.jpg"
        />
      </div>
      <div className="absolute top-4 left-4 text-black text-2xl font-bold">
        Party
      </div>
    </div>
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover-zoom sm:col-span-1">
      <div className="w-full h-48 bg-white flex items-center justify-center">
        <img
          alt="Person in gym wear"
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/a1aa/image/7YoVSswadhZNAlZey3j6btckXsVeBPbAceffWHlGdznHkNFfE.jpg"
        />
      </div>
      <div className="absolute top-4 left-4 text-black text-2xl font-bold">
        Gym
      </div>
    </div>
  </div>
</>

      </div>
    {/* Our Happy Customers Section */}
    <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div />
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full">
            <i className="fas fa-arrow-left" />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="ml-2 font-bold">Sarah M.</span>
          </div>
          <p>
            “Im blown away by the quality and style of the clothes I received
            from ShopCo. From casual wear to elegant dresses, every piece Ive
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="ml-2 font-bold">Alex K.</span>
          </div>
          <p>
            “Finding clothes that align with my personal style used to be a
            challenge until I discovered ShopCo. The range of options they offer
            is truly remarkable, catering to a variety of tastes and occasions.”
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="ml-2 font-bold">James L.</span>
          </div>
          <p>
            “As someone whos always on the lookout for unique fashion pieces,
            Im thrilled to have stumbled upon ShopCo. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  </div>
</>



</>

</>




  
  )
}

export default Hero
