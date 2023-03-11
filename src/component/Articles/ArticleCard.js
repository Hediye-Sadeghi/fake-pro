import React, { useRef, useState, useEffect } from "react";
import article from "./../../core/articlesData";
import { Link } from "react-router-dom";
import { CommenButton } from '../commen/CommenButton'

export default function ArticleCard({ description, img, title, uploadDate }) {
  return (
    <div>

      <div className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
        <a href="/" aria-label="Article">
          <img
            src={img}
            className="object-cover w-full h-64 rounded"
            alt=""
          />
        </a>
        <div className="py-5 px-4">
          <p className="mb-2 text-left text-xs font-semibold text-blue-400 uppercase">
            {uploadDate}
          </p>
          <a
            href="/"
            aria-label="Article"
            className="text-right inline-block my-4 text-blue-900 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-2xl font-bold leading-5">{title}</p>
          </a>
          <p className="text-right mb-4 text-blue-700 overflow-hidden text-overflow-ellipsis white-space-nowrap;">
            {description}
          </p>
          <div className="flex space-x-4 text-left">
            <a
              href="/"
              aria-label="Likes"
              className="flex items-start text-orange-500 text-sm p-1 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
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
                  className="w-5 h-5 text-gray-400 pl-1 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
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
              className="text-left flex items-start text-orange-500 text-sm p-1 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
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
                  className="w-5 h-5 text-gray-400 pl-1 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
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


    </div>
  );
}
