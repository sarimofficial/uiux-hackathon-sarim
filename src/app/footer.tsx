import React from 'react'

const footer = () => {
  return (
    <>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Footer Example</title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      rel="stylesheet"
    />
    {/* Newsletter Section */}
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex justify-center items-center">
          <input
            className="p-3 rounded-l-full w-64 md:w-96"
            placeholder="Enter your email address"
            type="email"
          />
          <button className="bg-white text-black p-3 rounded-r-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
    {/* Footer Section */}
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Shop Info */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-600">
              We have clothes that suit your style and which youre proud to wear.
              From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <a className="text-gray-600" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-gray-600" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-gray-600" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          {/* Company Links */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">COMPANY</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          {/* Help Links */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">HELP</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* FAQ Links */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">FAQ</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>
          {/* Resources Links */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">RESOURCES</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © Shop.co 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img
              alt="Visa logo"
              height={25}
              src="https://storage.googleapis.com/a1aa/image/u29HSd1oGwY8BNMJIZWP9o5fqmlN908vhaeCnMTCqaxQuo4TA.jpg"
              width={40}
            />
            <img
              alt="PayPal logo"
              height={25}
              src="https://storage.googleapis.com/a1aa/image/Iwgw49gmM3rlON3iqZ0kUvqMeamDmEazNRNUQ0wf8o5Uuo4TA.jpg"
              width={40}
            />
            <img
              alt="MasterCard logo"
              height={25}
              src="https://storage.googleapis.com/a1aa/image/SblzPMYq9zKCBxePShIMef2bpYyfc1m1S4yZVsYyvblF5iiPB.jpg"
              width={40}
            />
            <img
              alt="Apple Pay logo"
              height={25}
              src="https://storage.googleapis.com/a1aa/image/1PvwUgScRPIuGRGJRyP2Ms4iEV0e9UgRGHt14QXZWsyJXU8JA.jpg"
              width={40}
            />
            <img
              alt="Google Pay logo"
              height={25}
              src="https://storage.googleapis.com/a1aa/image/9KkVF8pqeXxbByQSoSKZMiZj23Lw0nvgCUrZklWR8k9KXU8JA.jpg"
              width={40}
            />
          </div>
        </div>
      </div>
    </footer>
  </>
  
  )
}

export default footer
