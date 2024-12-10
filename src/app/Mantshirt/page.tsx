import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Product Page</title>
  {/* <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  /> */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .thumbnail {\n            cursor: pointer;\n        }\n    "
    }}
  />
  <div className="container mx-auto p-4">
    {/* Breadcrumb */}
    <nav className="text-sm mb-4">
      <a className="text-gray-500 hover:text-gray-700" href="#">
        Home
      </a>{" "}
      &gt;
      <a className="text-gray-500 hover:text-gray-700" href="#">
        Shop
      </a>{" "}
      &gt;
      <a className="text-gray-500 hover:text-gray-700" href="#">
        Men
      </a>{" "}
      &gt;
      <span className="text-gray-700">T-shirts</span>
    </nav>
    <div className="flex flex-col lg:flex-row">
      {/* Image Gallery */}
      <div className="flex flex-col items-center lg:w-1/2">
        <div className="w-3/4 mb-4">
          <Image
            id="mainImage"
            alt="Main image of the One Life Graphic T-Shirt"
            className="w-full rounded-lg"
            height={600}
            src="https://storage.googleapis.com/a1aa/image/xGlYqBxqUvKjNh7UH7bT1pcl04T2M2KfR1vQLiG3SLg4pU8JA.jpg"
            width={600}
          />
        </div>
        <div className="flex space-x-4">
          <Image
            alt="Thumbnail image 1 of the One Life Graphic T-Shirt"
            className="w-20 h-20 rounded-lg border thumbnail"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/yzYIoIUhW8JoGhiJGOpebXFChQGGWkeqg4ZUdxTscqPvTp4TA.jpg"
            width={100}
            //onclick="changeImage(this.src)"
          />
          <Image
            alt="Thumbnail image 2 of the One Life Graphic T-Shirt"
            className="w-20 h-20 rounded-lg border thumbnail"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/x0RfApj2NgSOdSVzMkX5Buh5Fb1mZGbJIhBYmudVoaL5pU8JA.jpg"
            width={100}
           // onclick="changeImage(this.src)"
          />
          <Image
            alt="Thumbnail image 3 of the One Life Graphic T-Shirt"
            className="w-20 h-20 rounded-lg border thumbnail"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/F9e3flv8oLkui0AN23i1P2cwVItFnPoH3CVlguNOsv8tTp4TA.jpg"
            width={100}
            //onclick="changeImage(this.src)"
          />
        </div>
      </div>
      {/* Product Details */}
      <div className="lg:w-1/2 lg:pl-8">
        <h1 className="text-3xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span className="ml-2 text-gray-600">4.5/5</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold text-gray-900">$260</span>
          <span className="text-xl line-through text-gray-500 ml-4">$300</span>
          <span className="text-xl text-red-500 ml-2">-40%</span>
        </div>
        <p className="text-gray-600 mb-4">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Select Colors</h2>
          <div className="flex space-x-4">
            <button className="w-8 h-8 rounded-full bg-green-900 border-2 border-black" />
            <button className="w-8 h-8 rounded-full bg-green-700 border-2 border-transparent" />
            <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-transparent" />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border rounded-lg text-gray-600">
              Small
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-600">
              Medium
            </button>
            <button className="px-4 py-2 border rounded-lg text-white bg-black">
              Large
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-600">
              X-Large
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <button className="px-4 py-2 border rounded-lg text-gray-600">
            -
          </button>
          <span className="px-4">1</span>
          <button className="px-4 py-2 border rounded-lg text-gray-600">
            +
          </button>
        </div>
        <button className="w-full py-3 bg-black text-white rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rating &amp; Reviews</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
      <div className="flex space-x-8">
        <a href="#" className="text-gray-500 hover:text-gray-800">
          Product Details
        </a>
        <a href="#" className="text-gray-800 border-b-2 border-black pb-2">
          Rating &amp; Reviews
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          FAQs
        </a>
      </div>
    </div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">All Reviews (451)</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center text-gray-800 border border-gray-300 rounded-full px-4 py-2">
            <i className="fas fa-sort text-lg mr-2" /> Latest
            <i className="fas fa-chevron-down ml-2" />
          </button>
        </div>
        <button className="bg-black text-white rounded-full px-4 py-2">
          Write a Review
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
          </div>
          <span className="ml-2 text-green-500">
            <i className="fas fa-check-circle" />
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Samantha D.</h2>
        <p className="text-gray-600 mb-4">
          I absolutely love this t-shirt! The design is unique and the fabric
          feels so comfortable. As a fellow designer, I appreciate the attention
          to detail. Its become my favorite go-to shirt.
        </p>
        <p className="text-gray-400">Posted on August 14, 2023</p>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
          </div>
          <span className="ml-2 text-green-500">
            <i className="fas fa-check-circle" />
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Alex M.</h2>
        <p className="text-gray-600 mb-4">
          The t-shirt exceeded my expectations! The colors are vibrant and the
          print quality is top-notch. Being a UI/UX designer myself, Im quite
          picky about aesthetics, and this t-shirt definitely gets a thumbs up
          from me.
        </p>
        <p className="text-gray-400">Posted on August 15, 2023</p>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
          </div>
          <span className="ml-2 text-green-500">
            <i className="fas fa-check-circle" />
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Ethan R.</h2>
        <p className="text-gray-600 mb-4">
          This t-shirt is a must-have for anyone who appreciates good design.
          The minimalistic yet stylish pattern caught my eye, and the fit is
          perfect. I can see the designers touch in every aspect of this
          shirt.
        </p>
        <p className="text-gray-400">Posted on August 16, 2023</p>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
          </div>
          <span className="ml-2 text-green-500">
            <i className="fas fa-check-circle" />
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Olivia P.</h2>
        <p className="text-gray-600 mb-4">
          As a UI/UX enthusiast, I value simplicity and functionality. This
          t-shirt not only represents those principles but also feels great to
          wear. Its evident that the designer poured their creativity into
          making this t-shirt stand out.
        </p>
        <p className="text-gray-400">Posted on August 17, 2023</p>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
          </div>
          <span className="ml-2 text-green-500">
            <i className="fas fa-check-circle" />
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Liam K.</h2>
        <p className="text-gray-600 mb-4">
          This t-shirt is a fusion of comfort and creativity. The fabric is
          soft, and the design speaks volumes about the designers skill. Its
          like wearing a piece of art that reflects my passion for both design
          and fashion.
        </p>
        <p className="text-gray-400">Posted on August 18, 2023</p>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
            <i className="fas fa-star text-yellow-500" />
          </div>
          <span className="ml-2 text-green-500">
            <i className="fas fa-check-circle" />
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">Ava H.</h2>
        <p className="text-gray-600 mb-4">
          Im not just wearing a t-shirt; Im wearing a piece of design
          philosophy. The intricate details and thoughtful layout of the design
          make this shirt a conversation starter!
        </p>
        <p className="text-gray-400">Posted on August 19, 2023</p>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <button className="bg-gray-200 text-gray-800 rounded-full px-6 py-2">
        Load More Reviews
      </button>
    </div>
  </div>
</>
<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Product Recommendations</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .extra-bold {\n            font-weight: 800;\n        }\n        .hover-effect:hover {\n            transform: scale(1.05);\n            transition: transform 0.3s ease-in-out;\n        }\n    "
    }}
  />
  <div className="container mx-auto p-4">
    <h2 className="text-3xl extra-bold text-center mb-8">
      YOU MIGHT ALSO LIKE
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Product 1 */}
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <Image
          alt="Polo with Contrast Trims"
          className="mx-auto mb-4 hover-effect"
          height={200}
          src="https://storage.googleapis.com/a1aa/image/GWZTu75NsU4eOCatDM1FCaEjvTA63yG5GhkaHffPD105FTxnA.jpg"
          width={200}
        />
        <h3 className="text-lg font-semibold">Polo with Contrast Trims</h3>
        <div className="flex justify-center items-center mb-2">
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
        <div className="text-lg font-bold text-gray-800">
          $212 <span className="line-through text-gray-500">$242</span>{" "}
          <span className="text-red-500">20% off</span>
        </div>
      </div>
      {/* Product 2 */}
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <Image
          alt="Gradient Graphic T-shirt"
          className="mx-auto mb-4 hover-effect"
          height={200}
          src="https://storage.googleapis.com/a1aa/image/T92nK0DLlVL6DR2Ia2MOVCuSYyGZpfFyIyTQCfbPqth5ip4TA.jpg"
          width={200}
        />
        <h3 className="text-lg font-semibold">Gradient Graphic T-shirt</h3>
        <div className="flex justify-center items-center mb-2">
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
        <div className="text-lg font-bold text-gray-800">$145</div>
      </div>
      {/* Product 3 */}
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <Image
          alt="Polo with Tipping Details"
          className="mx-auto mb-4 hover-effect"
          height={200}
          src="https://storage.googleapis.com/a1aa/image/51jfdP9LXQRECiw9gl5QTdJWNIz8egWHEdreV4BPg5fsLmiPB.jpg"
          width={200}
        />
        <h3 className="text-lg font-semibold">Polo with Tipping Details</h3>
        <div className="flex justify-center items-center mb-2">
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
        <div className="text-lg font-bold text-gray-800">$180</div>
      </div>
      {/* Product 4 */}
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <Image
          alt="Black Striped T-shirt"
          className="mx-auto mb-4 hover-effect"
          height={200}
          src="https://storage.googleapis.com/a1aa/image/E1uetX7AaLUncyDaofP5JqqffQ5nELpNTLYVqdb7v904LmiPB.jpg"
          width={200}
        />
        <h3 className="text-lg font-semibold">Black Striped T-shirt</h3>
        <div className="flex justify-center items-center mb-2">
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
        <div className="text-lg font-bold text-gray-800">
          $120 <span className="line-through text-gray-500">$150</span>{" "}
          <span className="text-red-500">20% off</span>
        </div>
      </div>
    </div>
  </div>

</>


    </div>
  )
}

export default page
