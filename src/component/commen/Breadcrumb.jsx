import React from "react";
import { Link } from "react-router-dom";


export default function Breadcrumb({ links }) {
  return (
    <section className="bg-slate-100">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="flex py-2">
          <div class="flex w-10 h-10 justify-center items-center text-gray-400">
            <i class="fas fa-home text-lg"></i>
          </div> 
          <ul class="flex items-center mr-3">
            {links.map((link) => (
              <li class="list-none">
                <Link to={`/${link.to}`} class="flex items-center text-100 text-gray-600 hover:text-gray-500">
                  {link.title}
                  {
                      link.id !== links.length ? (
                          <i class="fas fa-angle-right text-100 mx-3 text-gray-400"></i>
                      ) : null
                  }
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
