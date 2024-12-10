"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopDropdownOpen, setMobileShopDropdownOpen] = useState(false);

  return (
    
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SHOP.CO</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  {/* Top Banner */}
  <div className="bg-black text-white text-center py-2 text-sm">
    Sign up and get 20% off to your first order.{" "}
    <a href="#" className="underline">
      Sign Up Now
    </a>
  </div>
  {/* Navigation Bar */}
  <nav className="bg-white shadow-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6 gap-12">
      {/* Logo */}
      <div className="text-2xl font-extrabold">
        <a href="/">SHOP.CO</a>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button id="mobile-menu-button" className="text-2xl">
          <i className="fas fa-bars" />
        </button>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-lg relative">
        <div className="group inline-block">
          <a href="/">
            Shop <i className="fas fa-chevron-down" />
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
            <a
              href="Mantshirt"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Man-Tshirts
            </a>
            <a
              href="Casual"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Casual
            </a>
          </div>
        </div>
        <a href="#" className="hover:underline">
          On Sale
        </a>
        <a href="#" className="hover:underline">
          New Arrivals
        </a>
        <a href="#" className="hover:underline">
          Brands
        </a>
      </div>
      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <div className="relative">
          <input
            type="text"
            className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Search for products..."
          />
          <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      {/* Icons */}
      <div className="flex space-x-4">
        <a href="Addtocard" className="text-2xl">
          <i className="fas fa-shopping-cart" />
        </a>
        <a href="#" className="text-2xl">
          <i className="fas fa-user" />
        </a>
      </div>
    </div>
    {/* Mobile Menu */}
    <div id="mobile-menu" className="hidden md:hidden">
      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
        Shop
      </a>
      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
        On Sale
      </a>
      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
        New Arrivals
      </a>
      <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
        Brands
      </a>
    </div>
  </nav>
</>

  );
};

export default Navbar