import React, { useRef, useState, useEffect } from "react";
import article from "./../../core/articlesData";
import { Link } from "react-router-dom";
import {CommenButton} from '../commen/CommenButton'

export default function ArticleCard() {
  return (
    <div>
      <div className="inner-carousel mx-auto grid max-w-6xl rtl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {article.map((arti) => (
          <Link to={`/article-info/${arti.articleName}`}>
            <div className="overflow-hidden shadow-lg transition-shadow duration-300 p-3 bg-white rounded">
              <a href="/" aria-label="Article">
                <img
                  src={arti.img}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5 px-4">
                <p className="mb-2 text-left text-xs font-semibold text-gray-600 uppercase">
                  {arti.uploadDate}
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">{arti.title}</p>
                </a>
                <p className="mb-4 text-gray-700 overflow-hidden text-overflow-ellipsis white-space-nowrap;">
                  {arti.description}
                </p>
                <div className="flex space-x-4 text-left">
                  <a
                    href="/"
                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">7.4K</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    className="text-left flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2 text-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        /> 
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-left">81</p>
                  </a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-36 mx-auto"><CommenButton>نمایش بیشتر</CommenButton></div>
      
    </div>
  );
}
