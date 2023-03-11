import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="sticky top-0 z-50">
      <div class="mx-auto flex-wrap p-4 flex-col md:flex-row items-center flex rounded-xl rounded-t-none border border-white/80 bg-white bg-opacity-80 drop-shadow-md backdrop-blur-2xl backdrop-saturate-200">
        <a class="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </a>
        <nav class="mx-auto flex flex-wrap items-center lg:text-xl lg:font-medium justify-center">
          <a class="mr-5 hover:text-gray-900">
            <Link
              className="text-blue-900 hover:text-blue-500 lg:pl-4"
              to="/"
            >
              بحر
            </Link>
          </a>
          <a class="mr-4 hover:text-gray-900">
            <Link
              className="text-blue-900 hover:text-blue-500 lg:pl-4"
              to="/courses/1"
            >
              دوره های آموزشی
            </Link>
          </a>
          <a class="mr-4 hover:text-gray-900">
            <Link
              className="text-blue-900 hover:text-blue-500 lg:pl-4"
              to="/articles/:page"
            >
              اخبار و مقالات
            </Link>
          </a>
          <a class="mr-4 hover:text-gray-900">
            <Link
              className="text-blue-900 hover:text-blue-500 lg:pl-4"
              to="javascript: void(0)"
            >
              دسته بندی  
            </Link>
          </a>
          <a class="mr-4 hover:text-gray-900">
            <Link
              className="text-blue-900 hover:text-blue-500 lg:pl-4"
              to="/about"
            >
              درباره ما
            </Link>
          </a>
        </nav>
        <Link to="/login">
          <button className="lg:font-bold lg:text-xl lg:px-4 lg:py-3 lg:mt-0 px-2 py-1 mt-5 shadow-md bg-orange-500 transition duration-150 ease-in-out border border-orange-400 hover:bg-orange-200 rounded-lg hover:border-orange-400 text-blue-900">
            ورود / عضویت
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
